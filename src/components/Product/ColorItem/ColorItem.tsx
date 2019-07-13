import cx from "classnames";
import * as React from "react";
import VOAttribute from "../../../VO/VOAttribute";
import Styles from "./Styles.module.scss";

interface IColorItemProps {
	color?: string;
	active?: boolean;
	item?: VOAttribute;
	click?: any;
}

export interface IColorItemState {}

class ColorItem extends React.Component<IColorItemProps, IColorItemState> {
	_handleClick = (event: any) => {
		event.preventDefault();
		const { active, item, click } = this.props;

		if (!active && click) {
			click(item);
		}
	};

	public render() {
		const { item, active, color } = this.props;

		const classes = cx(
			{ [Styles.Color]: true },
			{ [Styles.Active]: active }
		);
        
		const bgColor: any = item ? item.attribute_value : color;

		return (
			<span
				className={classes}
				style={{ background: `${bgColor}` }}
				onClick={this._handleClick}
			/>
		);
	}
}

export default ColorItem;
