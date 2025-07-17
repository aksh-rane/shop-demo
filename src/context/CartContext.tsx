"use client";
import { useState, useCallback, useEffect, useMemo, createContext } from "react";
import type { Product } from "@/app/home/products/products-props";

interface CartContextT {
    products: Array<Product>;
    isProductInCart: (productId: number) => boolean;
    updateProductQuantity: (product: Product, quantity: number, operation: 'increase' | 'decrease') => void;
    onAdd: (product: Product) => void;
    onRemove: (productId: number) => void;
}

export const DEFAULT_VALUE = {
    products: [],
    isProductInCart: () => { return false; },
    updateProductQuantity: () => { },
    onAdd: () => { },
    onRemove: () => { },
} as const satisfies CartContextT;

export const CartContext = createContext<CartContextT>(DEFAULT_VALUE);

type Props = Readonly<{
    children: React.ReactNode;
}>;

export const CartProvider = ({ children }: Props) => {
    const [products, setProducts] = useState<Array<Product>>([]);
  // Effect to save value to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && products.length) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

    const isProductInCart = useCallback((productId: number) => {
        return products.some(product => product.id === productId);
    }, [products]);

    const updateProductQuantity = useCallback((product: Product, quantity: number, operation: 'increase' | 'decrease') => {
        if (operation === 'decrease' && product.quantity === 1) {
            onRemove(product.id);
            return;
        }
        // Update the product quantity in the cart
        setProducts((prevProducts) =>
            prevProducts.map((item) =>
                item.id === product.id ? { ...item, quantity: operation === 'increase' ? quantity + 1 : quantity - 1 } : item
            )
        );
    }, []);

    const onAdd = useCallback((product: Product) => {
        if (!isProductInCart(product.id)) {
            setProducts((prevProducts) => [...prevProducts, { ...product, quantity: 1 }]);
        }
    }, [isProductInCart]);

    const onRemove = useCallback((productId: number) => {
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
    }, []);

    const value = useMemo(() => ({
        products: products,
        isProductInCart: isProductInCart,
        updateProductQuantity: updateProductQuantity,
        onAdd: onAdd,
        onRemove: onRemove,
    }), [products, isProductInCart, updateProductQuantity, onAdd, onRemove]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
