import Image from "next/image";
import Link from "next/link";
import React from "react";
const getProducts = async () => {
  const fetchProduct = await fetch(
    "https://tiles-gallery-server.vercel.app/product",
    { next: { revalidate: 864000 } },
  );
  const data = await fetchProduct.json();
  return data?.product;
};
const BestProducts = async () => {
  const tiles = await getProducts();
  const bestTies = await tiles.slice(0, 4);
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Featured Tiles</h2>

        <Link
          href="/tiles"
          className="text-sm border px-3 py-1 rounded hover:bg-black hover:text-white transition"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bestTies.map((tile) => (
          <div
            key={tile.id}
            className="border rounded-lg p-3 hover:shadow-md transition animate__animated animate__backInRight"
          >
            <div className="relative h-28 w-full rounded mb-3 overflow-hidden">
              <Image
                src={tile?.image}
                alt={tile?.title || "tile image"}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-medium text-sm">{tile?.title}</h3>
            <p className="text-xs text-gray-500">৳{tile?.price}/sqft</p>
            <Link
              href={`/tiles/${tile.id}`}
              className="mt-3 inline-block text-xs px-3 py-1 border rounded hover:bg-black hover:text-white transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestProducts;
