import * as React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

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
	submit = ev => {
		const { error, tokenResult } = this.props;
		this.props.stripe.createToken({ name: "Name" }).then(function(result) {
			if (result.error) {
				error(result.error.message);
			} else {
				tokenResult(result.token);
			}
		});
	};

	render() {
		return (
			<div className="checkout">
				<p>Would you like to complete the purchase?</p>
				<CardElement />
				<button onClick={this.submit}>Send</button>
			</div>
		);
	}
}

export default injectStripe(CheckoutForm);
