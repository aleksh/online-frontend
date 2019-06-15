import { Menu } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { categoriesActions } from "../../bus/categories/actions";
import { departmentsActions } from "../../bus/departments/actions";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import VODepartment from "../../VO/VODepartment";

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

	_handleClick = (event: any) => {
		const { actions, departments, selectedDepartment } = this.props;
		const id: number = Number(event.key);

		if (!selectedDepartment || selectedDepartment.department_id !== id) {
			const selectedItem: VODepartment =
				departments.filter(item => id === item.department_id)[0] ||
				null;

			if (selectedItem) {
				history.push(`/${selectedItem.name}`);
				actions.changeDepartment(selectedItem);
			}
		}
	};

	public render() {
		const { departments } = this.props;
		return (
			<Menu
				mode="horizontal"
				onClick={this._handleClick}
				style={{ lineHeight: "64px", width: '300px' }}
			>
				{departments &&
					departments.map(item => {
						return (
							<Menu.Item key={item.department_id}>
								{item.name}
							</Menu.Item>
						);
					})}
			</Menu>
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
