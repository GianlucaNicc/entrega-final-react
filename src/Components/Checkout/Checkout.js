import { useState, useContext } from "react";
import { db } from "../services/FireBase/firebaseConfig";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from '../../Components/context/CartContext';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        try {
            const order = {
                buyer: { name, phone, email },
                items: cart,
                total: getTotalPrice(),
                date: new Date()
            }
            const orderCollection = collection(db, "orders");
            const docRef = await addDoc(orderCollection, order);
            setOrderId(docRef.id);
            
            const productsRef = doc(db, "Products", cart);
            for (const item of cart) {
                updateDoc(productsRef, {
                    stock: item.product.stock - item.quantity 
                });
            }
            clearCart();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1 className="loading">Se está generando su orden...</h1>
    }

    if (orderId) {
        return <h1 className="success">El id de su orden es: {orderId}</h1>
    }

    return (
        <CheckoutForm onConfirm={createOrder} />
    );
}

export default Checkout;