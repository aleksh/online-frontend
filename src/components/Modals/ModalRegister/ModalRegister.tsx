import * as React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import Styles from "./Styles.module.scss";
import VORegisterError from "./VOErrorRegister";
import VORegisterRequest from "./VORegisterRequest";

interface IModalRegisterProps {
	modalProps: any;
	actions: any;
}

interface IModalRegisterState {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	formErrors: VORegisterError;
	nameValid: boolean;
	emailValid: boolean;
	passwordValid: boolean;
	confirmPasswordValid: boolean;
	formValid: boolean;
	[key: string]: any;
}

class ModalRegister extends React.Component<
	IModalRegisterProps,
	IModalRegisterState
> {
	constructor(props: IModalRegisterProps) {
		super(props);

		this.state = {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			formErrors: new VORegisterError(),
			emailValid: true,
			nameValid: true,
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
			nameValid,
			confirmPasswordValid,
			password
		} = this.state;

		switch (fieldName) {
			case "name":
				nameValid = value.trim().length >= 3;
				formErrors.name = nameValid ? "" : "too short";
				break;
			case "email":
				emailValid =
					value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ||
					false;
				formErrors.email = emailValid ? "" : " invalid";
				break;
			case "password":
				passwordValid = value.length >= 6;
				formErrors.password = passwordValid ? "" : " too short";
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
			{
				formErrors,
				emailValid,
				passwordValid,
				nameValid,
				confirmPasswordValid
			},
			this._validateForm
		);
	};

	_validateForm = () => {
		const {
			emailValid,
			passwordValid,
			nameValid,
			confirmPasswordValid
		} = this.state;
		this.setState({
			formValid:
				emailValid && passwordValid && confirmPasswordValid && nameValid
		});
	};

	_handlerSubmit = (event: any) => {
		event.preventDefault();

		const { formValid, email, name, password } = this.state;

		if (formValid) {
			const { actions } = this.props;
			actions.registerAsync(
				new VORegisterRequest(name.trim(), email, password)
			);
			actions.hideModal();
		}
	};

	public render() {
		const {
			name,
			email,
			password,
			confirmPassword,
			nameValid,
			emailValid,
			passwordValid,
			confirmPasswordValid,
			formErrors
		} = this.state;
		return (
			<Modal
				className={Styles.Register}
				isOpen={true}
				toggle={this._handlerClosedPopup}
			>
				<ModalHeader toggle={this._handlerClosedPopup} />
				<ModalBody>
					<h1>Register</h1>
					<form onSubmit={this._handlerSubmit}>
						<div className={Styles.Form}>
							<div>
								<label
									htmlFor="name"
									className={!nameValid ? Styles.red : ""}
								>
									Name *
								</label>
								<input
									id="name"
									name="name"
									autoFocus
									value={name}
									onChange={this._handleUserInput}
								/>

								<p className={Styles.red}>{formErrors.name}</p>
							</div>
							<div>
								<label
									htmlFor="email"
									className={!emailValid ? Styles.red : ""}
								>
									Email Address *
								</label>
								<input
									id="email"
									name="email"
									value={email}
									onChange={this._handleUserInput}
								/>

								<p className={Styles.red}>{formErrors.email}</p>
							</div>
							<div>
								<label
									htmlFor="password"
									className={!passwordValid ? Styles.red : ""}
								>
									Password *
								</label>
								<input
									name="password"
									type="password"
									id="password"
									value={password}
									onChange={this._handleUserInput}
								/>

								<p className={Styles.red}>
									{formErrors.password}
								</p>
							</div>
							<div>
								<label
									htmlFor="confirmPassword"
									className={
										!confirmPasswordValid ? Styles.red : ""
									}
								>
									Confirm Password *
								</label>
								<input
									name="confirmPassword"
									type="password"
									id="confirmPassword"
									value={confirmPassword}
									onChange={this._handleUserInput}
								/>

								<p className={Styles.red}>
									{formErrors.confirmPassword}
								</p>
							</div>
							<div className={Styles.Center}>
								<Button
									size={"lg"}
									color="primary"
									type={"submit"}
								>
									Register
								</Button>
							</div>
						</div>
					</form>
				</ModalBody>
			</Modal>
		);
	}
}

export default ModalRegister;
