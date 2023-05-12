import { Link } from "react-router-dom";

const Item = ({ id, title, image, price, stock }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: 450 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Precio: $ {price}</p>
            <p className="card-text">Stock Disponible: {stock}</p>
            <Link to={`/item/${id}`} class="btn btn-outline-primary">
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;