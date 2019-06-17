import React from "react";
import { Redirect, Route, Switch } from "react-router";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import { Path } from "./path";

interface IPublicProps {}

interface IPublicState {}

export default class Public extends React.Component<
	IPublicProps,
	IPublicState
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
				<Route exact path={"/:id"} render={MainPage} />
				<Route exact path={"/"} render={MainPage} />
				<Redirect to={"/"} />
			</Switch>
		);
	}
}
