import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"



const Cart = () => {
    const { cart, clearCart, removeItem, increaseQuantity, decreaseQuantity, getTotalItems, getTotalPrice } = useContext(CartContext)

    return (
        <div className='cart-container'>
            
        <div className="cart-list">
            {cart.length ? cart.map(item => (
        <div key={item.id} className="cart-item">
        <div>
            <img src={item.image} alt="" />
        </div>
        <div>{item.title}</div>
        <div>{item.quantity}</div>
        <div>${(item.price * item.quantity).toFixed(2)}</div>
        <div className='containerButtons'>
                                
            <button class="btn btn-outline-primary" onClick={() => removeItem(item.id)}>Eliminar</button>
            <button class="btn btn-outline-primary" onClick={() => decreaseQuantity(item.id)}>-</button>
            <button class="btn btn-outline-primary" onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        </div>
        )) : <p>No hay productos en el carrito.</p> }
        </div>

            
        <div className="cart-summary">
            <h2>Resumen del Carrito</h2>
        <div className="summary-item">
                    
        <div>Productos {getTotalItems()}</div>
        </div>
        <div className="summary-item">
                    
        <div>Total ${getTotalPrice()}</div>
        </div>
                
        <button class="btn btn-outline-primary"onClick={() => { if (cart.length > 0) { clearCart(); } }}>Vaciar Carrito</button>
        
        <button class="btn btn-outline-primary" onClick={()=> clearCart()} >Limpiar carrito</button>
        <Link to='/checkout' class="btn btn-outline-success">Checkout</Link>
        </div>
        </div>
    );
}

export default Cart;