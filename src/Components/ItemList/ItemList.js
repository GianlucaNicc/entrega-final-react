import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="prodDestacados">
      <h1><span class="">Niccoli's shop</span></h1>
    <div className="ListGroup">
      {products.map((prod) => (
      <Item key={prod.id} {...prod} />
      ))}
    </div>
    </div>
  );
};

export default ItemList;