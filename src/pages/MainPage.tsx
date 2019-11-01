import React from "react";
import { LayoutHoC } from "../components/Layout/Layout";
import ProductsList from "../components/ProductsList/ProductsList";

interface IMainPageProps {}

const MainPage: React.FunctionComponent<IMainPageProps> = () => {
	return <ProductsList />;
};

export default LayoutHoC(MainPage);
