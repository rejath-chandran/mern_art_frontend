import React from "react";
import { Link } from "react-router-dom";
const collections = [
  {
    name: "Women's",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg",
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
];

const trendingProducts = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
];

const perks = [
  {
    name: "Free returns",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
  },
  {
    name: "Same day delivery",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
  },
  {
    name: "All year discount",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: "For the planet",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "",
    price: "",
    imageSrc:
      "https://d7hftxdivxxvm.cloudfront.net/?height=436&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F3NWE5exOx6ni85xifx7aeg%2Fnormalized.jpg&width=774",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "",
    price: "",
    imageSrc:
      "https://d7hftxdivxxvm.cloudfront.net/?height=436&quality=80&resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2Fmarketing_collections%2Fimages%2Fe53f2a60-64a5-4303-8121-08b24f1f665f%3FX-Amz-Expires%3D43200%26X-Amz-Date%3D20231220T130329Z%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAICYI665LIMIGJ6KQ%252F20231220%252Fus-east-1%252Fs3%252Faws4_request%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D9c17260b6ac5564b5a82790dafc0a9452d464e98a85c556415fabb6e90223e0a&width=774",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "",
    price: "",
    imageSrc:
      "https://d7hftxdivxxvm.cloudfront.net/?height=436&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FKmJZWb8ZAhKGv3mi7jT95w%2Fnormalized.jpg&width=774",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "",
    price: "",
    imageSrc:
      "https://d7hftxdivxxvm.cloudfront.net/?height=436&quality=80&resize_to=fill&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FaWpQZXv1dzX4k1Kjosfm6w%2Fnormalized.jpg&width=774",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "",
    price: "",
    imageSrc:
      "https://d7hftxdivxxvm.cloudfront.net/?height=436&quality=80&resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2Fmarketing_collections%2Fimages%2F3640a99b-4b4c-44ef-a257-a80da50ecdbe%3FX-Amz-Expires%3D43200%26X-Amz-Date%3D20231220T130330Z%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAICYI665LIMIGJ6KQ%252F20231220%252Fus-east-1%252Fs3%252Faws4_request%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D30a23f635aaff7abbc4141f367e01294d280ff9a9c777bb5e85321a9e5346536&width=774",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];
const Home = () => {
  return (
    <main>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Art Galleria
          </h1>
          <p className="mt-4 max-w-xl text-sm text-gray-700">
            Discover works from galleries in Belgium, the Netherlands, and
            Luxembourg. Browse Collection
          </p>
        </div>
      </div>

      {/* Product grid */}
      <section
        aria-labelledby="products-heading"
        className="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8"
      >
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Link to={"/admin"}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </Link>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
