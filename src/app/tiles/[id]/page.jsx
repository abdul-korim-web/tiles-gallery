import { Button } from "@heroui/react";
import Image from "next/image";
const fetchTile = async(tileId)=>{
    const res = await fetch(`https://tiles-gallery-server.vercel.app/product/${tileId}`,{
      cache:"no-store"
    })
  if (!res.ok) {
    return { error: true };
  }
  const data = await res.json();
    return data?.singleProduct
}
export async function generateMetadata({ params }) {
  const { id } =await params;

  const res = await fetch(
    `https://tiles-gallery-server.vercel.app/product/${id}`
  );
  const data = await res.json()
  const tiles = data?.singleProduct

  return {
    title: tiles?.title || "Tiles Details",
    description: tiles?.description?.slice(0, 150) || "Tiles details page",
  };
}
export default async function TileDetailsPage({params}) {

    const {id} =  await params
    const tile = await fetchTile(id)

console.log('tile', tile)
if (tile?.error) {
    return(
        <div className="text-center py-20 text-2xl md:text-4xl font-bold italic font-mono">
            tile not found
        </div>
    )
    
}

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 md:mt-20">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden">
          <Image
            src={tile?.image || "https://cdn-icons-png.freepik.com/512/2748/2748558.png"}
            alt={tile?.title || "image"}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            {tile?.title}
          </h1>
          <p className="text-lg font-bold mb-4">
            {tile?.currency} {tile?.price}
          </p>
          <p className="text-sm text-gray-600 mb-4">{tile?.description}</p>
          <div className="text-sm space-y-2 mb-4">
            <p>
              <span className="font-medium">Material:</span> {tile?.material}
            </p>
            <p>
              <span className="font-medium">Dimensions:</span> {tile?.dimensions}
            </p>
            <p>
              <span className="font-medium">Category:</span> {tile?.category}
            </p>
          </div>
          <div className="flex gap-2 mb-6">
            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
              Minimalist
            </span>
            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
              Blue
            </span>
          </div>
          <p
            className={`text-sm mb-4 ${
              tile.inStock ? "text-green-600" : "text-red-500"
            }`}
          >
            {tile.inStock ? "In Stock" : "Out of Stock"}
          </p>
          <Button className="px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 ">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}
