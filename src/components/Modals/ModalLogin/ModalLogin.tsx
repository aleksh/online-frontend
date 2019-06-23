import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modalActions } from "../../../bus/modal/actions";
import { userActions } from "../../../bus/user/actions";
import VOLoginError from "./VOLoginError";
import VOLoginRequest from "./VOLoginRequest";

interface IModalLoginProps {
	modalProps: any;
	actions: any;
}

interface IModalLoginState {
	email: string;
	password: string;
	formErrors: VOLoginError;
	emailValid: boolean;
	passwordValid: boolean;
	formValid: boolean;
	[key: string]: any;
}

class ModalLogin extends React.Component<IModalLoginProps, IModalLoginState> {
	constructor(props: IModalLoginProps) {
		super(props);

		this.state = {
			email: "",
			password: "",
			formErrors: new VOLoginError(),
			emailValid: true,
			passwordValid: true,
			formValid: false
		};
	}
	_handlerClosedPopup = () => {
		const { actions } = this.props;
		actions.hideModal();
	};

	_handlerOkPopup = () => {
		this._handlerClosedPopup();
	};

	_handleUserInput = (event: any) => {
		const { name, value } = event.target;

		this.setState({ [name]: value }, () => {
			this._validateField(name, value);
		});
	};

	_validateField = (fieldName: any, value: any) => {
		let { formErrors, emailValid, passwordValid } = this.state;

		switch (fieldName) {
			case "email":
				emailValid =
					value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ||
					false;
				formErrors.email = emailValid ? "" : " is invalid";
				break;
			case "password":
				passwordValid = value.length >= 6;
				formErrors.password = passwordValid ? "" : " is too short";
				break;
			default:
				break;
		}

		this.setState(
			{ formErrors, emailValid, passwordValid },
			this._validateForm
		);
	};

	_validateForm = () => {
		this.setState({
			formValid: this.state.emailValid && this.state.passwordValid
		});
	};

	_handlerSubmit = (event: any) => {
		event.preventDefault();
		const { formValid, email, password } = this.state;

		if (formValid) {		
            const { actions } = this.props;	
            actions.loginAsync(new VOLoginRequest(email, password));	
            actions.hideModal();		
		}
	};

	public render() {
		const {
			email,
			password,
			emailValid,
			passwordValid,
			formErrors
		} = this.state;
		return (
			<>ddddddddddА</>
		);
	}
}

/*
<Modal
				title="Login"
				visible={true}
				onOk={this._handlerOkPopup}
				onCancel={this._handlerClosedPopup}
			>
				<form onSubmit={this._handlerSubmit}>
					<div>
						<label htmlFor="email">Email Address</label>
						<input
							id="email"
							name="email"
							autoComplete="email"
							autoFocus
							value={email}
							onChange={this._handleUserInput}
						/>

						<p>{formErrors.email}</p>
					</div>
					<div>
						<label>Password</label>
						<input
							name="password"
							type="password"
							id="password"
							value={password}
							onChange={this._handleUserInput}
						/>

						<p>{formErrors.password}</p>
					</div>
					<input type="submit" value="Submit" />
				</form>
			</Modal>
*/

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...modalActions, ...userActions },
			dispatch
		)
	};
};

export default connect(
	null,
	mapDispatchToProps
)(ModalLogin);
