import { ReactNode, createContext, useEffect, useState } from "react";
import { produce } from "immer";
import { PlantPotProps } from "../pages/Home/PotsList/components/PotCard";

export interface CartItem extends PlantPotProps {
  cartItemID: string;
  quantity: number;
  label: string;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  totalCartItems: number;
  addPotToCart: (pot: CartItem) => void;
  addItemSizeType: (cartItemId: number, type: "P" | "M" | "G") => void;
  changeCartItemQuantity: (
    cartItemId: string,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const POTS_STORAGE_KEY = "plantPotShop:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(POTS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  const totalCartItems = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function calculatePrice(type: string, price: number): number {
    if (type === "M") {
      return price + (price * 5) / 100;
    } else if (type === "G") {
      return price + (price * 10) / 100;
    }

    return price;
  }

  function addPotToCart(pot: CartItem) {
    const potAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === pot.id && cartItem.label === pot.label
    );

    const newOrder = produce(cartItems, (draft) => {
      if (potAlreadyExistsInCart < 0) {
        pot.cartItemID = `${pot.id}-${pot.label}`;

        pot.price = calculatePrice(pot.label, pot.price);
        draft.push(pot);
      } else {
        draft[potAlreadyExistsInCart].quantity += pot.quantity;
        draft[potAlreadyExistsInCart].label = pot.label;
        draft[potAlreadyExistsInCart].price = calculatePrice(
          pot.label,
          pot.price
        );
      }
    });

    setCartItems(newOrder);
  }

  function addItemSizeType(cartItemId: number, type: "P" | "M" | "G") {
    const newOrder = produce(cartItems, (draft) => {
      const potExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (potExistsInCart >= 0) {
        const item = draft[potExistsInCart];
        draft[potExistsInCart].label = type;
        draft[potExistsInCart].price = calculatePrice(type, item.price);
      }
    });

    setCartItems(newOrder);
  }

  function changeCartItemQuantity(
    cartItemId: string,
    type: "increase" | "decrease"
  ) {
    const newOrder = produce(cartItems, (draft) => {
      console.log(cartItems[0].cartItemID === cartItemId);
      console.log(cartItemId);

      const potExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.cartItemID === cartItemId
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

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(POTS_STORAGE_KEY, JSON.stringify(cartItems));
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
        cleanCart,
        addItemSizeType,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
