import * as React from "react";
import { connect } from "react-redux";
import { Elements, StripeProvider } from "react-stripe-elements";
import { Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import { modalActions } from "../../bus/modal/actions";
import { userActions } from "../../bus/user/actions";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Styles from "./Styles.module.scss";

interface IProfileProps {
	actions: any;
}

interface IProfileState {}

class Pay extends React.Component<IProfileProps, IProfileState> {
	_handleError = (error: string) => {
		const { actions } = this.props;
		actions.showError(error);
	};

	_handleResult = (token: any) => {
		const { actions } = this.props;
		actions.showError(token.id);
	};

	public render() {
		return (
			<Container className={Styles.Pay}>
				<Row>
					<h2>
						<strong>Pay</strong>
					</h2>
				</Row>
				<Row className={Styles.Pay}>
					<StripeProvider apiKey="pk_test_NcwpaplBCuTL6I0THD44heRe">
						<div className="example">
							<h1>React Stripe Elements Example</h1>
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
		//	user: state.user.get("user")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...userActions, ...modalActions },
			dispatch
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Pay);
