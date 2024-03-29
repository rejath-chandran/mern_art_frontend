import React from "react";
import { Link } from "react-router-dom";
import { AllCategory, GetSystemDetails } from "../../services/AdminQry";
import { ContainerScroll } from "../../ui/ContainerScroll";

// const products = [
//   {
//     id: 1,
//     name: "Earthen Bottle",
//     href: "",
//     price: "",
//     imageSrc:
//       "https://d7hftxdivxxvm.cloudfront.net/?height=436&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F3NWE5exOx6ni85xifx7aeg%2Fnormalized.jpg&width=774",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   }
// ];
const Home = () => {
  let category = AllCategory();
  const { data, isLoading } = GetSystemDetails();
  let products = category.data || [];
  const users = [
    {
      name: "Manu Arora",
      designation: "Founder, Algochurn",
      image: "https://picsum.photos/id/10/300/300",
      badge: "Mentor",
    },
  ];
  return (
    // <main>
    //   <div className="bg-white">
    //     <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    //       <h1 className="text-3xl font-bold tracking-tight text-gray-900">
    //         Art Galleria
    //       </h1>
    //       <p className="mt-4 max-w-xl text-sm text-gray-700">
    //         Discover works from galleries in Belgium, the Netherlands, and
    //         Luxembourg. Browse Collection
    //       </p>

    //     </div>
    //   </div>

    //   {/* Product grid */}
    //   <section
    //     aria-labelledby="products-heading"
    //     className="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8"
    //   >
    //     <h2
    //       id="products-heading"
    //       className="text-2xl mb-5 font-bold text-black"
    //     >
    //       Categories
    //     </h2>

    //     {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //       {products.map((product) => (
    //         <Link key={product._id} className="group">
    //           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
    //             <Link to={`category/${product.name}`}>
    //               <img
    //                 src={product.image}
    //                 className="h-full w-full object-cover object-center group-hover:opacity-75"
    //               />
    //             </Link>
    //           </div>
    //           <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    //           <p className="mt-1 text-lg font-medium text-gray-900">
    //             {product.price}
    //           </p>
    //         </Link>
    //       ))}
    //     </div> */}

    //   </section>
    // </main>
    <div className="h-[150vh]">
      <div className="w-full h-full bg-black">
        <ContainerScroll
          users={products}
          titleComponent={
            <>
              {isLoading ? (
                <>loading..</>
              ) : (
                <>
                  <h1 className="text-4xl font-semibold text-black dark:text-white">
                    {`${data.home}`.toUpperCase()} <br />
                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                      {`${data.name}`.toUpperCase()}
                    </span>
                  </h1>
                </>
              )}
            </>
          }
        />
      </div>
      <section
        aria-labelledby="products-heading"
        className="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8"
      >
        <h2
          id="products-heading"
          className="text-2xl mb-5 font-bold text-black"
        >
          Categories
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product._id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Link to={`category/${product.name}`}>
                  <img
                    src={product.image}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </Link>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
