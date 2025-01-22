import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FBF5DD] background-lines">
      {/* Header */}
      <header className="bg-yellow-400 p-4 shadow-md">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">Foodies</h1>
          {/* <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div> */}
        </div>
      </header>

      {/* Categories */}
      <main className="max-w-md mx-auto p-4 space-y-4">
        <div
          onClick={() => window.open("../../assets/foodmenu.pdf", "_blank")}
          className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        >
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Foods"
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <h2 className="text-white text-xl font-semibold">Foods Menu</h2>
            <p className="text-white/80 text-sm">Order fresh meals</p>
          </div>
        </div>

        <div
          onClick={() => window.open("path/to/your/beverages.pdf", "_blank")}
          className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        >
          <img
            src="https://images.unsplash.com/photo-1544145945-f90425340c7e"
            alt="Beverages"
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <h2 className="text-white text-xl font-semibold">Bar Menu</h2>
            <p className="text-white/80 text-sm">
              Cheers to good times and great flavors
            </p>
          </div>
        </div>

        <div
          onClick={() => window.open("path/to/your/desserts.pdf", "_blank")}
          className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        >
          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
            alt="Desserts"
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <h2 className="text-white text-xl font-semibold">Cafe Menu</h2>
            <p className="text-white/80 text-sm">
              A perfect brew to brighten your day
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
