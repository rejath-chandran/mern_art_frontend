import { lazy } from "react";
import { AdminRoutes } from "./routes/AdminRoutes";
import { SellerRoutes } from "./routes/SellerRoutes";
import ShopeRoutes from "./routes/ShopeRoutes";

// const ShopeRoutes=lazy(()=>import("./routes/ShopeRoutes"))
// const SellerRoutes=lazy(()=>import("./routes/SellerRoutes"))
// const AdminRoutes=lazy(()=>import( "./routes/AdminRoutes"))

import { useLoggedInStore } from "./store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Render = () => {
  const role = useLoggedInStore((state) => state.userType);
  if (role === "admin") {
    return <AdminRoutes />;
  } else if (role === "seller") {
    return <SellerRoutes />;
  } else {
    return <ShopeRoutes />;
  }
};

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Render />
    </QueryClientProvider>
  );
}

export default App;
