import { createContext, useState } from "react";

const Context = createContext();

export function CartProvider({ children }) {
	const [items, setItems] = useState([]);
	const addToCart = (name, price) => {
		setItems((prevState) => [...prevState, (name, price)]);
	};
	return <Context.Provider value={{ items, addToCart }}>{children}</Context.Provider>;
}

export default Context;
