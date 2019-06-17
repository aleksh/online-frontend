import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { shoppingCartActions } from "../../bus/shoppingCart/actions";

interface IShippingAddressProps {
	actions: any;
}

export interface IShippingAddressState {}

class ShippingAddress extends React.Component<
	IShippingAddressProps,
	IShippingAddressState
> {
	public render() {
		return (
			<>
				<div style={{ backgroundColor: "white" }}>SHIPPING ADDRESS</div>
			</>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...shoppingCartActions }, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShippingAddress);
