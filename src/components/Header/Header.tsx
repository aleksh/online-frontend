import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { categoriesActions } from "../../bus/categories/actions";
import { departmentsActions } from "../../bus/departments/actions";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import Utils from "../../utils/Utils";
import Departments from "../Departments/Departments";
import HeaderBag from "../HeaderBag/HeaderBag";
import HeaderNav from "../HeaderNav/HeaderNav";
import Search from "../Search/Search";
import User from "../User/User";
import Styles from "./Styles.module.scss";

export interface IHeaderProps {
	actions: any;
}
export interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
	_handlerClick = () => {
		const { actions } = this.props;
		//back to home screen Reset all selected state
		const needClean = Utils.NeedProductsClean(history);
		if (needClean) {
			actions.cleanProducts();
		}
		actions.cleanSelectedItems();
	};

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
						<Link onClick={this._handlerClick} to="/">
							SHOPMATE
						</Link>
					</h1>
					<Departments />
					<Search />
				</div>
			</header>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...categoriesActions, ...departmentsActions, ...productsActions },
			dispatch
		)
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Header);
