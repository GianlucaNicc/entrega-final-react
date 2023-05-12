import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import useCount from "./myCountHook/useCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ItemCount = ({stock, initial, onAdd}) => {
    const {counter, increment, decrement} = useCount()
    const { addItem } = useContext(CartContext);

    return (
        <div>
        <Button>Counter: {counter}</Button>
        <Stack direction="row" spacing={2}>
        <Button className="Button" variant="outlined" onClick={increment}>+</Button>
        <Button className="Button" variant="outlined" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
        <Button className="Button" variant="outlined" onClick={decrement}>-</Button>
        </Stack>    
        </div>
    )
}