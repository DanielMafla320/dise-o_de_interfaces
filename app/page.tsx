import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="bg-white max-w-sm w-full rounded-2xl shadow-xl overflow-hidden flex flex-col">
        
        {/* Imagen */}
        <div className="relative h-48 w-full">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
            alt="Paisaje hermoso"
            fill
            className="object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-4 p-6 flex-1">
          
          <h2 className="text-2xl font-bold text-gray-800">
            Paisaje natural
          </h2>

          <p className="text-gray-600 text-sm flex-1">
            Esta card muestra la imagen que proporcionaste mostrando un
            paisaje con bosque y montañas.
          </p>

          {/* Hashtags */}
          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer">
              #tailwind
            </span>
            <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 cursor-pointer">
              #frontendev
            </span>
          </div>

        </div>

      </div>

    </main>
  );
}
