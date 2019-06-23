import * as React from "react";
import { connect } from "react-redux";
import { Nav } from "reactstrap";
import { bindActionCreators } from "redux";
import { categoriesActions } from "../../bus/categories/actions";
import { departmentsActions } from "../../bus/departments/actions";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import Utils from "../../utils/Utils";
import VODepartment from "../../VO/VODepartment";
import DepartmentItem from "./DepartmentItem";
import Styles from "./Styles.module.scss";

interface IDepartmentsProps {
	selectedDepartment: VODepartment;
	departments: VODepartment[];
	actions: any;
}

export interface IDepartmentsState {}

class Departments extends React.Component<
	IDepartmentsProps,
	IDepartmentsState
> {
	componentDidMount = () => {
		const { actions, departments } = this.props;

		if (departments.length === 0) {
			actions.departmentsAsync();
		}
	};

	_handleClick = (item: VODepartment) => {
		const { actions } = this.props;

		const needClean = Utils.NeedProductsClean(history);
		if (needClean) {
			actions.cleanProducts();
		}

		history.push(`/${item.name}`);
		actions.changeDepartment(item);
	};

	_getDepartmentsList = () => {
		const { departments, selectedDepartment } = this.props;

		return departments.map(item => {
			const active = selectedDepartment
				? selectedDepartment.department_id === item.department_id
				: false;
			return (
				<DepartmentItem
					key={item.department_id}
					active={active}
					item={item}
					click={this._handleClick}
				/>
			);
		});
	};

	public render() {
		return (
			<Nav className={Styles.departmentsNav}>
				{this._getDepartmentsList()}
			</Nav>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		selectedDepartment: state.departments.get("selectedDepartment"),
		departments: state.departments.get("departments")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...departmentsActions, ...productsActions, ...categoriesActions },
			dispatch
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Departments);
