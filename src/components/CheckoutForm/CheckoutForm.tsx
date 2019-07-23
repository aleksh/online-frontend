import * as React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Button } from "reactstrap";
import { history } from "../../init/middleware/core";
import Styles from "./Styles.module.scss";

interface ICheckoutFormProps {
	error: Function;
	tokenResult: Function;
	actions: any;
	stripe: any;
}

interface ICheckoutFormState {}

class CheckoutForm extends React.Component<
	ICheckoutFormProps,
	ICheckoutFormState
> {
	_handleSubmit = ev => {
		const { error, tokenResult } = this.props;
		this.props.stripe.createToken({ name: "Name" }).then(result => {
			if (result.error) {
				error(result.error.message);
			} else {
				tokenResult(result.token);
			}
		});
	};

	_handleBack = () => {
		history.goBack();
	};

	render() {
		return (
			<div className={Styles.Checkout}>
				<p>Would you like to complete the purchase?</p>
				<CardElement className={Styles.Card} />
				<Button
					size="lg"
					color="primary"
					outline
					onClick={this._handleSubmit}
				>
					Pay
				</Button>
				<Button
					size="lg"
					color="primary"
					outline
					onClick={this._handleBack}
				>
					Cancel
				</Button>
			</div>
		);
	}
}

export default injectStripe(CheckoutForm);
