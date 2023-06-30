import { ReactNode, createContext, useEffect, useState } from "react";
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
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
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

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newOrder = produce(cartItems, (draft) => {
      const potExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (potExistsInCart >= 0) {
        const item = draft[potExistsInCart];
        draft[potExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newOrder);
  }

  function removeCartItem(cartItemId: number) {
    const newOrder = produce(cartItems, (draft) => {
      const potExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (potExistsInCart >= 0) {
        draft.splice(potExistsInCart, 1);
      }
    });

    setCartItems(newOrder);
  }

  useEffect(() => {
    localStorage.setItem(POTS_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        addPotToCart,
        cartItems,
        cartQuantity,
        totalCartItems,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
