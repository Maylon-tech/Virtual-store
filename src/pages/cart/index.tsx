import { useContext } from "react"
import { Link } from "react-router-dom"

import { CartContext } from "../../context/cartContext"

const Cart = () => {
  const { cart } = useContext(CartContext)

  return (
    <div className="w-full max-w-7xl px-4 mx-auto">
      <h1  className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      { cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Ops seu Cart esta vazio..</p>
          <Link 
            className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded"
            to="/"
          >
            Acessar Produtos
          </Link>
        </div>
      )}

      {
        cart.map((item) => (
          <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
            <img
              className="w-28"
              src={item.cover}
              alt={item.title}
            />

            <strong>Price: {item.price}</strong>

            <div className="flex items-center justify-center">
              <button
                className="bg-slate-600 px-2 mr-2 rounded text-white font-medium flex item-center justify-center"
                onClick={() => { }}
              >
                -
              </button>
              { item.amount }
              <button
                className="bg-slate-600 ml-2 px-2 rounded text-white font-medium flex item-center justify-center"
                onClick={() => { }}
              >
                +
              </button>
            </div>

            <strong className="float-right">
              Subtotal: {
                item.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
              })}
            </strong>
          </section>
        ))
      }

      {
        cart.length !== 0 && (
          <p className="font-bold mt-4">
            Total: R$ 12.000
          </p>
        )
      }
    </div>
  )
}

export default Cart