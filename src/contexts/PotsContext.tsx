import { ReactNode, createContext, useState } from "react";
import { PlantPotsProps } from "../pages/Home/PotsList/components/PotsCard";

export interface CartItem extends PlantPotsProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  totalCartItems: number;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>();
}
