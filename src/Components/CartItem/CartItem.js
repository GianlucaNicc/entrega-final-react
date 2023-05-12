import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ id, img, title, price, quantity, category }) => {
    const { removeItem } = useContext(CartContext);
  
    const handleRemove = () => {
      removeItem(id);
    };

    return (
        <form id="procesar-pago" method="POST">
    <div class="mb-2">
        <label class="form-label">Imagen</label>
        <input type="text" class="form-control"/>
    </div>
    <div class="mb-2">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control"/>
    </div>
    <div class="mb-2">
        <label class="form-label">Categoria</label>
        <input type="text" class="form-control"/>
    </div>
    <div class="mb-2">
        <label class="form-label">Precio</label>
        <input type="text" class="form-control"/>
    </div>
    <div class="mb-2">
        <label class="form-label">Cantidad</label>
        <input type="text" class="form-control"/>
    </div>
    <div class="mb-2">
        <label class="form-label">Sub Total</label>
        <input type="text" class="form-control"/>
    </div>

    <div >
    <img src={img} alt="" />
    </div>

  <div>
    <label class="label">{title}</label>
  </div>
  <div>
    <label class="label">$ {price},00</label>
  </div>
  <div>
    <label class="label">{quantity}</label>
  </div>
  <div>
    <label class="label">$ {price * quantity},00</label>
  </div>

<Button className="btn btn-danger botonEliminar" onClick={handleRemove}> X </Button>

<div className="col-md-4 mb-2">
    <Link to="/" className="btn btn-success btn-block btn-kepBuying"> Seguir comprando </Link>
 </div>
<div className="col-md-4 mb-2">
    <Link  to="/checkout" className="btn btn-info btn-block btn-kepBuying"> Finalizar Compra </Link>
</div>

<div className="row justify-content-between">
<div className="col-md-4 mb-2">
    <Link to="/" className="btn btn-success btn-block btn-kepBuying">Seguir comprando</Link>
</div>

<div className="col-xs-12 col-md-4">
<div className="col-md-4 mb-2">
    <Link to="/checkout" className="btn btn-info btn-block btn-kepBuying"> Finalizar Compra </Link>
</div>
</div>
</div>
</form>
);
};

export default CartItem;