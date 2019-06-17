import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Path } from "../../navigation/path";

interface IHeaderBagProps {
	count: number;
}

export interface IHeaderBagState {}

class HeaderBag extends React.Component<IHeaderBagProps, IHeaderBagState> {
	public render() {
		const { count } = this.props;
		return (
			<div style={{ backgroundColor: "white" }}>
				<Link to={Path.shoppingCart}>
					MyBag <strong>{count}</strong>
				</Link>
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
