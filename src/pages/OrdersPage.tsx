import React from "react";
import { LayoutHoC } from "../components/Layout/Layout";
import Orders from "../components/Orders/Orders";

interface IOrdersPageProps {}

const OrdersPage: React.FunctionComponent<IOrdersPageProps> = () => {
	return <Orders />;
};

export default LayoutHoC(OrdersPage);
