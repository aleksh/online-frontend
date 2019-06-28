import React from "react";
import { Route } from "react-router";
import RedirectComp from "./RedirectComp";

interface IProtectedRouteProps {
	isLoggedIn: boolean;
	path: string;
	component: any;
}

interface IProtectedRouteState {}

export default class ProtectedRoute extends React.Component<
	IProtectedRouteProps,
	IProtectedRouteState
> {
	public render() {
		const { component: Component, isLoggedIn, path } = this.props;
		return (
			<Route
				exact
				path={path}
				render={isLoggedIn ? Component : RedirectComp}
			/>
		);
	}
}
