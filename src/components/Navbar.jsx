import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Navbar({ onShopClick }) {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">MyStore</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={onShopClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Shop Now
        </button>

        <button className="relative">
          <ShoppingCartIcon className="h-7 w-7 text-gray-700 hover:text-gray-900" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
            2
          </span>
        </button>
      </div>
    </nav>
  );
}
