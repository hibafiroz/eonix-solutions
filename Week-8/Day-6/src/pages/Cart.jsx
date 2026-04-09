import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext)

  return (
    <div className="bg-black min-h-screen text-white px-6 py-20">
      <div className="flex py-4 justify-end mt-10 gap-75 px-30">
        <h1 className="text-4xl font-bold text-green-500 text-center">Your Cart</h1>

        <button onClick={() => clearCart()} className="border-2 bg-amber-400 font-semibold rounded-2xl px-6 py-2 text-black border-white/30">Clear Cart</button>
      </div>
      <div className="mt-10">
        {
          cart.length === 0 ? (
            <h1 className="text-xl text-center mt-30 text-gray-400">
              No items in cart 🛒
            </h1>
          ) : (
            <div className="grid gap-6 max-w-2xl mx-auto">
              {cart.map((item, index) => {
                return (
                  <div key={index}
                    className="bg-white/10 p-4 rounded-xl flex items-center gap-6 shadow-md hover:shadow-lg transition"
                  >
                    <img src={item.image} alt="product"
                      className="w-24 h-24 object-contain bg-white p-2 rounded-lg"
                    />

                    <div className="flex-1">
                      <h2 className="text-white font-semibold text-lg line-clamp-1">
                        {item.title}
                      </h2>

                      <p className="text-green-400 font-bold mt-2 text-lg">
                        ${item.price}
                      </p>
                    </div>

                    {/* Button */}
                    <button onClick={() => { removeFromCart(item.id) }} className="bg-red-500 hover:bg-red-500/80 text-white px-4 py-2 rounded-lg">
                      Remove
                    </button>
                  </div>
                )
              })}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart