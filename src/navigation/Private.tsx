import React from "react";
import { Redirect, Route, Switch } from "react-router";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
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
                <Route exact path={'/:id'} render={MainPage} />
                <Route exact path={'/:did/:catid'} render={MainPage} />
                <Route exact path={'/'} render={MainPage} />
				<Route
					exact
					path={`${Path.product}/:id`}
					render={ProductPage}
				/>
				<Redirect to={'/'} />
			</Switch>
		);
	}
}
