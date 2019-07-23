import React from "react";
import { Redirect, Route, Switch } from "react-router";
import MainPage from "../pages/MainPage";
import OrdersPage from "../pages/OrdersPage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import ShippingAddressPage from "../pages/ShippingAddressPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import { Path } from "./path";
import ProtectedRoute from "./ProtectedRoute";

interface IRoutersProps {
	isLoggedIn: boolean;
}

interface IRoutersState {}

export default class Routers extends React.Component<
	IRoutersProps,
	IRoutersState
> {
	public render() {
		const { isLoggedIn } = this.props;
		return (
			<Switch>
				<ProtectedRoute
					isLoggedIn={isLoggedIn}
					path={Path.shippingAddress}
					component={ShippingAddressPage}
				/>

				<ProtectedRoute
					isLoggedIn={isLoggedIn}
					path={Path.profile}
					component={ProfilePage}
				/>

				<ProtectedRoute
					isLoggedIn={isLoggedIn}
					path={Path.orders}
					component={OrdersPage}
				/>

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
				<Route exact path={"/:id"} render={MainPage} />
				<Route exact path={"/"} render={MainPage} />
				<Redirect to={"/"} />
			</Switch>
		);
	}
}
