import React from "react";
import { LayoutHoC } from "../components/Layout/Layout";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

interface IShoppingCartProps {}

const ShoppingCartPage: React.FunctionComponent<IShoppingCartProps> = () => {
	return <ShoppingCart />;
};

export default LayoutHoC(ShoppingCartPage);
