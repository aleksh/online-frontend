import * as React from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { bindActionCreators } from "redux";
import { modalActions } from "../../../bus/modal/actions";
import { userActions } from "../../../bus/user/actions";
import Styles from "./Styles.module.scss";
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

	_handleFacebookResponse = (response: any) => {
		const { actions } = this.props;
		actions.loginFacebookAsync(response.tokenDetail.accessToken);
	};

	_handleFacebookError = (error: any) => {
		const { actions } = this.props;
		actions.showError(error.message);
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
			<Modal
				size={"sm"}
				isOpen={true}
				toggle={this._handlerClosedPopup}
				className={Styles.Login}
			>
				<ModalHeader toggle={this._handlerClosedPopup} />
				<ModalBody>
					<h1>Sign In</h1>
					<form onSubmit={this._handlerSubmit}>
						<div className={Styles.Form}>
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
									autoComplete="email"
									autoFocus
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
							<div className={Styles.Buttons}>
								<Button
									size={"lg"}
									color="primary"
									type={"submit"}
								>
									Login
								</Button>

								<FacebookProvider appId="990528587802751">
									<LoginButton 
										scope="email"
										onCompleted={
											this._handleFacebookResponse
										}
										onError={this._handleFacebookError}
									>
										<span>Login via Facebook</span>
									</LoginButton>
								</FacebookProvider>
							</div>
						</div>
					</form>
				</ModalBody>
			</Modal>
		);
	}
}

// 352854622106208  facebook Turing appId
// 990528587802751  facebook my appId

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
