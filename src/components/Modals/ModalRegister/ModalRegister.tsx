import { Modal } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modalActions } from "../../../bus/modal/actions";
import VORegisterError from "./VOErrorRegister";

interface IModalRegisterProps {
	modalProps: any;
	actions: any;
}

interface IModalRegisterState {
	email: string;
	password: string;
	confirmPassword: string;
	formErrors: VORegisterError;
	emailValid: boolean;
	passwordValid: boolean;
	formValid: boolean;
	confirmPasswordValid: boolean;
	[key: string]: any;
}

class ModalRegister extends React.Component<
	IModalRegisterProps,
	IModalRegisterState
> {
	constructor(props: IModalRegisterProps) {
		super(props);

		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
			formErrors: new VORegisterError(),
			emailValid: true,
			passwordValid: true,
			confirmPasswordValid: true,
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
		let {
			formErrors,
			emailValid,
			passwordValid,
			confirmPasswordValid,
			password
		} = this.state;

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
			case "confirmPassword":
				confirmPasswordValid = value === password;
				formErrors.confirmPassword = confirmPasswordValid
					? ""
					: " not match ";
				break;
			default:
				break;
		}

		this.setState(
			{ formErrors, emailValid, passwordValid, confirmPasswordValid },
			this._validateForm
		);
	};

	_validateForm = () => {
		const { emailValid, passwordValid, confirmPasswordValid } = this.state;
		this.setState({
			formValid: emailValid && passwordValid && confirmPasswordValid
		});
	};

	_handlerSubmit = (event:any) => {
		event.preventDefault();

		const { formValid, email, password } = this.state;

		if (formValid) {            
            console.log({ email, password });			
		}
	};

	public render() {
		const {
			email,
            password,
            confirmPassword,
			emailValid,
            passwordValid,
            confirmPasswordValid,
			formErrors
		} = this.state;
		return (
			<Modal
				title="Register"
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
                    <div>
						<label>Password</label>
						<input
							name="confirmPassword"
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							onChange={this._handleUserInput}
						/>

						<p>{formErrors.confirmPassword}</p>
					</div>
					<input type="submit" value="Submit" />
				</form>
			</Modal>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...modalActions }, dispatch)
	};
};

export default connect(
	null,
	mapDispatchToProps
)(ModalRegister);
