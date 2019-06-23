import * as React from "react";
import { connect } from "react-redux";
import { Badge, Button } from "reactstrap";
import { ReactComponent as Bag } from "../../assets/images/shopping-bag.svg";
import { history } from "../../init/middleware/core";
import { Path } from "../../navigation/path";
import Styles from "./Styles.module.scss";

interface IHeaderBagProps {
	count: number;
}

export interface IHeaderBagState {}

class HeaderBag extends React.Component<IHeaderBagProps, IHeaderBagState> {
	_handleClick = () => {
		history.push(Path.shoppingCart);
	};

	public render() {
		const { count } = this.props;

		return (
			<div className={Styles.myBag} onClick={this._handleClick}>
				{count > 0 && <Badge pill>{count}</Badge>}

				<Bag className={Styles.icon} />
				<Button color="link">Your Bag</Button>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		count: state.shoppingCart.get("count")
	};
};

export default connect(
	mapStateToProps,
	null
)(HeaderBag);
