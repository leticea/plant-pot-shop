import { ReactNode, createContext, useState } from "react";
import { PlantPotProps } from "../pages/Home/PotsList/components/PotCard";
import { produce } from "immer";

export interface CartItem extends PlantPotProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  totalCartItems: number;
  addPotToCart: (pot: CartItem) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const POTS_ITEMS_STORAGE_KEY = "plantPotShop:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(POTS_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const totalCartItems = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addPotToCart(pot: CartItem) {
    const potAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === pot.id
    );

    const newOrder = produce(cartItems, (draft) => {
      if (potAlreadyExistsInCart < 0) {
        draft.push(pot);
      } else {
        draft[potAlreadyExistsInCart].quantity += pot.quantity;
      }
    });

    setCartItems(newOrder);
  }

  return (
    <CartContext.Provider
      value={{ addPotToCart, cartItems, cartQuantity, totalCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
