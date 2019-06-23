import cx from "classnames";
import * as React from "react";
import Styles from "./Styles.module.scss";
import VOAttribute from "../../../VO/VOAttribute";

interface IColorItemProps {
	active: boolean;
	item: VOAttribute;
	click: any;
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
		const { item, active } = this.props;

		const classes = cx(
			{ [Styles.Color]: true },
			{ [Styles.Active]: active }
		);

		return (
			<span
				className={classes}
				style={{ background: `${item.attribute_value}` }}
				onClick={this._handleClick}
			/>
		);
	}
}

export default ColorItem;
