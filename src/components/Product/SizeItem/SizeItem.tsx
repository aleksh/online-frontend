import * as React from "react";
import { Button } from "reactstrap";
import VOAttribute from "../../../VO/VOAttribute";

interface ISizeItemProps {
	active: boolean;
	item: VOAttribute;
	click: any;
}

export interface ISizeItemState {}

class SizeItem extends React.Component<ISizeItemProps, ISizeItemState> {
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
			<Button
				outline
				color="primary"
				active={active}
				onClick={this._handleClick}
			>
				{item.attribute_value}
			</Button>
		);
	}
}

export default SizeItem;
