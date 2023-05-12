import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = { name, phone, email };

        onConfirm(userData);
    };

    return (
        
    <div className= 'containerCheckOutForm '>
    <form onSubmit={handleConfirm} class="row g-3 needs-validation" novalidate>
    <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="validationCustom01" onChange={({ target }) => setName(target.value)} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
    </div>
    <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Teléfono</label>
    <input type="text" class="form-control" id="validationCustom02" onChange={({ target }) => setPhone(target.value)} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
    </div>
    <div class="col-md-4">
    <label for="exampleFormControlInput1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" onChange={({ target }) => setEmail(target.value)}placeholder="name@example.com"/>
    </div>
    <div className="button-group">
        <button type="submit" class="btn btn-outline-secondary">Confirmar Pedido</button>
    </div>
    </form>
    </div>
    );
};

export default CheckoutForm;