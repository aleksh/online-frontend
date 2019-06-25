import React from "react";
import { Redirect, Route, Switch } from "react-router";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import ShippingAddressPage from "../pages/ShippingAddressPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import { Path } from "./path";

interface IPrivateProps {}

interface IPrivateState {}

export default class Private extends React.Component<
	IPrivateProps,
	IPrivateState
> {
	public render() {
		return (
			<Switch>
				<Route
					exact
					path={`${Path.product}/:id`}
					render={ProductPage}
				/>
				<Route
					exact
					path={Path.shoppingCart}
					render={ShoppingCartPage}
				/>
				<Route
					exact
					path={Path.shippingAddress}
					render={ShippingAddressPage}
				/>
				<Route exact path={Path.profile} render={ProfilePage} />
				<Route exact path={"/:id"} render={MainPage} />
				<Route exact path={"/"} render={MainPage} />
				<Redirect to={"/"} />
			</Switch>
		);
	}
}
