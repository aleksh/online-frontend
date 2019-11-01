import React from "react";
import { LayoutHoC } from "../components/Layout/Layout";
import Product from "../components/Product/Product";

interface IProductPageProps {}

const ProductPage: React.FunctionComponent<IProductPageProps> = () => {
	return <Product />;
};

export default LayoutHoC(ProductPage);
