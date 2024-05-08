import { createContext, ReactNode, useState } from "react"
import { ProductProps } from '../pages/home'

interface CartContextData {
  cart: CartProps[]
  cartAmount: number
  addItemCart: (newItem: ProductProps) => void
}

interface CartProps {
  id: number
  title: string
  description: string
  price: number
  cover: string
  amount: number
  total: number
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

// Create Provider
function CartProvider({ children }: CartProviderProps){
  const [cart, setCart] = useState<CartProps[]>([])

  function addItemCart(newItem: ProductProps) {
    // adiciona no carrinho
    //Se ja nao existe no carrinho
    const indexItem = cart.findIndex(item => item.id === newItem.id) // Devolve a posicao que esta dentro da lista

    if(indexItem !== -1) {
      // Se entrou aqui apenas somamos +1 na quantidade 
      let cartList = cart
      cartList[indexItem].amount = cartList[indexItem].amount + 1
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

      setCart(cartList)
      return
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(products => [...products, data])
  }

  return(
    <CartContext.Provider 
      value={{ 
        cart, 
        cartAmount: cart.length,
        addItemCart 
      }}
    >
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider