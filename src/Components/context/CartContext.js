import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (product, quantity) => {
        if (isInCart(product.id)) {
            setCart(cart.map(product =>{
                return product.id === product.id ? { ...product, quantity: product.cuantity + quantity } : product }));
             } else {
                   setCart([...cart, { ...product, quantity }]);
             }
            }

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));  

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    

    const increaseQuantity = (id) => {
        const newCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity + 1 };
            } else {
                return product;
            }
        });
        setCart(newCart);
    };

    const decreaseQuantity = (id) => {
        const newCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity - 1 };
            } else {
                return product;
            }
        }).filter(product => product.quantity > 0);
        setCart(newCart);
    };

    const getTotalItems = () => {
        cart.reduce((acc, actualItem) => acc + actualItem.quantity, 0);
      };

    const getTotalPrice = () => {
        const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
        return totalPrice.toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity, getTotalItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}