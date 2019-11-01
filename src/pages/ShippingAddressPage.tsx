import React from "react";
import { LayoutHoC } from "../components/Layout/Layout";
import ShippingAddress from "../components/ShippingAddress/ShippingAddress";

interface IShippingAddressProps {}

const ShippingAddressPage: React.FunctionComponent<
	IShippingAddressProps
> = () => {
	return <ShippingAddress />;
};

export default LayoutHoC(ShippingAddressPage);
