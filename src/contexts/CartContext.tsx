import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { produce } from 'immer';

// Tipagens
export interface RetailItems {
  title: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  title: string;
  subcategories?: Subcategory[]; // Subcategorias aninhadas, opcional
  items?: Item[]; // Itens da subcategoria, opcional
}

export interface Item {
  id: number;
  title: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  manufacturer: string;
  rating: number;
  description: string;
  favorited: boolean;
  price: number;
  image: string;
  itemId: number;
}

export interface ProductItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: ProductItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addProductToCart: (product: ProductItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

const CART_ITEMS_STORAGE_KEY = '@myapp:cartItems';

export const CartContext = createContext({} as CartContextType);

export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<ProductItem[]>(() => {
    const storedCartItems = localStorage.getItem(CART_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }

    return [];
  });

  const cartQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  const cartItemsTotal = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);

  function addProductToCart(product: ProductItem) {
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    const newCartItems = produce(cartItems, (draft) => {
      if (productIndex === -1) {
        draft.push(product);
      } else {
        draft[productIndex].quantity += product.quantity;
      }
    });

    setCartItems(newCartItems);
  }

  function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCartItems = produce(cartItems, (draft) => {
      const itemIndex = draft.findIndex((item) => item.id === cartItemId);
      if (itemIndex !== -1) {
        if (type === 'increase') {
          draft[itemIndex].quantity += 1;
        } else {
          draft[itemIndex].quantity -= 1;
          if (draft[itemIndex].quantity <= 0) {
            draft.splice(itemIndex, 1);
          }
        }
      }
    });

    setCartItems(newCartItems);
  }

  function removeCartItem(cartItemId: number) {
    const newCartItems = cartItems.filter((item) => item.id !== cartItemId);
    setCartItems(newCartItems);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(CART_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addProductToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
