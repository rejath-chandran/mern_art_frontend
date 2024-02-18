import { AdminRoutes } from "./routes/AdminRoutes";
import { SellerRoutes } from "./routes/SellerRoutes";
import ShopeRoutes from "./routes/ShopeRoutes";
import { useLoggedInStore } from "./store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Render = () => {
  const role = useLoggedInStore((state) => state.userType);
  
  console.log("type", role);

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
