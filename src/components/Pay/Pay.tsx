import * as React from "react";
import { connect } from "react-redux";
import { Elements, StripeProvider } from "react-stripe-elements";
import { Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import { modalActions } from "../../bus/modal/actions";
import { orderActions } from "../../bus/order/actions";
import VOOrder from "../../VO/VOOrder";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Styles from "./Styles.module.scss";

interface IProfileProps {
	order: VOOrder;
	actions: any;
}

interface IProfileState {}

class Pay extends React.Component<IProfileProps, IProfileState> {
	_handleError = (error: string) => {
		const { actions } = this.props;
		actions.showError(error);
	};

	_handleResult = (token: any) => {
		const { actions, order } = this.props;

		actions.chargeOrderAsync({
			stripeToken: token.id,
			order_id: order.order_id,
			description: "test Order",
			amount: Math.ceil(Number(order.total_amount)) * 100
		});
	};

	public render() {
		return (
			<Container className={Styles.Pay}>
				<Row className={Styles.Pay}>
					<StripeProvider apiKey="pk_test_NcwpaplBCuTL6I0THD44heRe">
						<div className="example">
							<Elements>
								<CheckoutForm
									error={this._handleError}
									tokenResult={this._handleResult}
								/>
							</Elements>
						</div>
					</StripeProvider>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		order: state.order.get("orderForPay")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...modalActions, ...orderActions },
			dispatch
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Pay);
