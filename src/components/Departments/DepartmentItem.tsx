import * as React from "react";
import { NavItem, NavLink } from "reactstrap";
import VODepartment from "../../VO/VODepartment";

interface IDepartmentItemProps {
	active: boolean;
	item: VODepartment;
	click: any;
}

export interface IDepartmentItemState {}

class DepartmentItem extends React.Component<
	IDepartmentItemProps,
	IDepartmentItemState
> {
	_handleClick = (event: any) => {
		event.preventDefault();
		const { active, item, click } = this.props;

		if (!active && click) {
			click(item);
		}
	};

	public render() {
		const { item, active } = this.props;

		return (
			<NavItem key={item.department_id}>
				<NavLink href="" active={active} onClick={this._handleClick}>
					{item.name}
				</NavLink>
			</NavItem>
		);
	}
}

export default DepartmentItem;
