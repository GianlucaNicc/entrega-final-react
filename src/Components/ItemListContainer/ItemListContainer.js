import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/FireBase/firebaseConfig";


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId ? query(collection(db, 'Products'), where('categoryId', '==', categoryId)) : collection(db, 'Products');

    getDocs(collectionRef)
    .then (response => {
      const productsAdapted = response.docs.map(doc => { 
        const data = doc.data()
        return { id: doc.id, ...data } 
      })

      setProducts(productsAdapted)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  },[categoryId, greeting]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;