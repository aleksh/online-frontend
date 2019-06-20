import * as React from "react";
import { Link } from "react-router-dom";
import Departments from "../Departments/Departments";
import HeaderBag from "../HeaderBag/HeaderBag";
import HeaderNav from "../HeaderNav/HeaderNav";
import Search from "../Search/Search";
import User from "../User/User";
import Styles from "./Styles.module.scss";

export interface IHeaderProps {}
export interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
	public render() {
		return (
			<header>
				<div className={Styles.topHeaderRow}>
					<User />
					<HeaderNav />
					<HeaderBag />
				</div>
				<div className={Styles.headerRow}>
					<h1>
						<Link to="/">SHOPMATE</Link>
					</h1>
					<Departments />
					<Search />
				</div>
			</header>
		);
	}
}

export default Header;