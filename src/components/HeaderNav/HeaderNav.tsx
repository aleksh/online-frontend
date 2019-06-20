import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Styles from "./Styles.module.scss";

interface IHeaderNavProps {}

const HeaderNav: React.FunctionComponent<IHeaderNavProps> = (
	props: IHeaderNavProps
) => {
	return (
		<Nav className={Styles.headerNav}>
			<NavItem>
				<NavLink href="#">Daily Deals</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="#">Sell</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="#">Help &amp; Contact</NavLink>
			</NavItem>
		</Nav>
	);
};

export default HeaderNav;
