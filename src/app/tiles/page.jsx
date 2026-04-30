import Image from "next/image";
import Link from "next/link";
const getProducts = async () => {
  const fetchProduct = await fetch(
    "https://tiles-gallery-server.onrender.com/product",
    { next: { revalidate: 86400 } },
  );
  const data = await fetchProduct.json();
  return data;
};
export default async function TilesPage() {
  const tiles = await getProducts();
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 font-mono italic">
          Explore All Tiles
        </h1>

        <div className="max-w-[500px] mx-auto">
          <input
            type="text"
            placeholder="Search tiles by name..."
            className="w-full px-5 py-3 rounded-full border shadow-sm outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="border rounded-lg p-3 hover:shadow-md transition animate__animated animate__fadeInDownBig"
          >
            <div className="relative h-28 w-full rounded mb-3 overflow-hidden">
              <Image
              loading="lazy"
                src={tile?.image}
                alt={tile?.title || "tile image"}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-medium text-sm ">{tile?.title}</h3>
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
    </div>
  );
}
