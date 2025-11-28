import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
 const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  return (
  <div>
      <Navbar onShopClick={fetchProducts} />

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-contain mb-3"
            />
            <h2 className="font-semibold mb-1">{item.title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              {item.description.slice(0, 60)}...
            </p>
            <p className="font-bold text-lg">₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
