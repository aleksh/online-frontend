import React from "react";
import { LayoutHoC } from "../components/Layout/Layout";
import Pay from "../components/Pay/Pay";

interface IPayPageProps {}

const PayPage: React.FunctionComponent<IPayPageProps> = () => {
	return <Pay />;
};

export default LayoutHoC(PayPage);
