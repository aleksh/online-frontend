import React from "react";
import { Redirect } from "react-router";

interface IRedirectCompProps {}

const RedirectComp: React.FunctionComponent<IRedirectCompProps> = (
	props: IRedirectCompProps
) => {
	return (
		<Redirect to="/"/>
	);
};

export default RedirectComp;
