import * as React from "react";
import { ListGroupItem } from "reactstrap";
import VOCategory from "../../VO/VOCategory";

interface ICategoryItemProps {
	active: boolean;
	item: VOCategory;
	click: any;
}

export interface ICategoryItemState {}

class CategoryItem extends React.Component<
	ICategoryItemProps,
	ICategoryItemState
> {
	_handleClick = () => {
		const { active, item, click } = this.props;

		if (!active && click) {
			click(item);
		}
	};

	public render() {
		const { item, active } = this.props;

		return (
			<ListGroupItem
				tag="button"
				active={active}
				onClick={this._handleClick}
			>
				{item.name}
			</ListGroupItem>
		);
	}
}

export default CategoryItem;
