import * as React from "react";
import { Button } from "reactstrap";
import VOAttribute from "../../../VO/VOAttribute";

interface ISizeItemProps {
	size?: string;
	active?: boolean;
	item?: VOAttribute;
	click?: any;
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
		const { item, active, size } = this.props;

		const label: any = item ? item.attribute_value : size;

		return (
			<Button
				outline
				color="primary"
				active={active}
				onClick={this._handleClick}
			>
				{label}
			</Button>
		);
	}
}

export default SizeItem;
