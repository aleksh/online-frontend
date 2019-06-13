import { Menu } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { departmentsActions } from "../../bus/departments/actions";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import { ITEMS_PER_PAGE } from "../../utils/Constants";
import VODepartment from "../../VO/VODepartment";

interface IDepartmentsProps {
	selectedDepartmentId: VODepartment;
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
		const { actions, departments } = this.props;

		const selectedItem: VODepartment =
			departments.filter(
				item => Number(event.key) === item.department_id
			)[0] || null;

		if (selectedItem) {
            actions.setSelectedDepartment(selectedItem);
            history.push(`/${selectedItem.name}`);            
			actions.productsAsync({ page: 1, limit: ITEMS_PER_PAGE });			
		}
	};

	public render() {
		const { departments } = this.props;
		return (
			<Menu
				mode="horizontal"
				onClick={this._handleClick}
				style={{ lineHeight: "64px" }}
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
		selectedDepartmentId: state.departments.get("selectedDepartmentId"),
		departments: state.departments.get("departments")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...departmentsActions, ...productsActions },
			dispatch
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Departments);
