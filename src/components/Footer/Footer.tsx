import * as React from "react";
import Departments from "../Departments/Departments";
import HeaderBag from "../HeaderBag/HeaderBag";
import Search from "../Search/Search";
import User from "../User/User";

export interface IFooterProps {}
export interface IFooterState {}

class Footer extends React.Component<IFooterProps, IFooterState> {
	public render() {
		return (
			<footer style={{ height: "55px" }}>Footer</footer>
		);
	}
}

export default Footer;
