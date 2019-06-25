import * as React from "react";
import { connect } from "react-redux";
import { Button, Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import { userActions } from "../../bus/user/actions";
import VOUser from "../../VO/VOUser";
import Styles from "./Styles.module.scss";
import VOProfileError from "./VOProfileError";

interface IProfileProps {
	user: VOUser;
	actions: any;
}

export interface IProfileState {
	name: string;
	email: string;
	password: string;
	day_phone: string;
	eve_phone: string;
	mob_phone: string;
	formErrors: VOProfileError;
	nameValid: boolean;
	passwordValid: boolean;
	emailValid: boolean;
	formValid: boolean;
	[key: string]: any;
}

class Profile extends React.Component<IProfileProps, IProfileState> {
	constructor(props: IProfileProps) {
		super(props);

		this.state = {
			name: "",
			email: "",
			password: "",
			day_phone: "",
			eve_phone: "",
			mob_phone: "",
			formErrors: new VOProfileError(),
			nameValid: true,
			passwordValid: true,
			emailValid: true,
			formValid: false
		};
	}

	static getDerivedStateFromProps(
		nextProps: IProfileProps,
		prevState: IProfileState
	) {
		if (prevState.name.length === 0) {
			return {
				name: nextProps.user.name,
				email: nextProps.user.email,
				day_phone: nextProps.user.day_phone || "",
				eve_phone: nextProps.user.eve_phone || "",
				mob_phone: nextProps.user.mob_phone || ""
			};
		}

		return null;
	}

	_handleUserInput = (event: any) => {
		const { name, value } = event.target;

		this.setState({ [name]: value }, () => {
			this._validateField(name, value);
		});
	};

	_validateField = (fieldName: any, value: any) => {
		let { formErrors, emailValid, nameValid, passwordValid } = this.state;

		switch (fieldName) {
			case "email":
				emailValid =
					value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ||
					false;
				formErrors.email = emailValid ? "" : " invalid";
				break;
			case "name":
				nameValid = value.length >= 6;
				formErrors.name = nameValid ? "" : " too short";
				break;
			case "password":
				passwordValid = value.length === 0 || value.length >= 6;
				formErrors.password = passwordValid ? "" : " too short";
				break;
			default:
				break;
		}

		this.setState(
			{ formErrors, emailValid, nameValid, passwordValid },
			this._validateForm
		);
	};

	_validateForm = () => {
		this.setState({
			formValid:
				this.state.emailValid &&
				this.state.nameValid &&
				this.state.passwordValid
		});
	};

	_handlerSubmit = (event: any) => {
		event.preventDefault();
		const {
			formValid,
			name,
			email,
			password,
			day_phone,
			eve_phone,
			mob_phone
		} = this.state;

		if (formValid) {
			const { actions } = this.props;

			actions.updateProfileAsync({
				name,
				email,
				password,
				day_phone,
				eve_phone,
				mob_phone
			});
		}
	};

	public render() {
		const {
			formErrors,
			nameValid,
			emailValid,
			email,
			passwordValid,
			password,
			name,
			day_phone,
			eve_phone,
			mob_phone
		} = this.state;

		return (
			<Container className={Styles.Profile}>
				<Row>
					<h2>
						<strong>PROFILE</strong>
					</h2>
				</Row>
				<Row>
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
									Password
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
								<label htmlFor="day_phone">day phone</label>
								<input
									name="day_phone"
									type="text"
									id="day_phone"
									value={day_phone}
									onChange={this._handleUserInput}
								/>
							</div>
							<div>
								<label htmlFor="eve_phone">eve phone</label>
								<input
									name="eve_phone"
									type="text"
									id="eve_phone"
									value={eve_phone}
									onChange={this._handleUserInput}
								/>
							</div>
							<div>
								<label htmlFor="mob_phone">mob phone</label>
								<input
									name="mob_phone"
									type="text"
									id="mob_phone"
									value={mob_phone}
									onChange={this._handleUserInput}
								/>
							</div>
							<div className={Styles.Buttons}>
								<Button
									size={"lg"}
									color="primary"
									type={"submit"}
								>
									Update
								</Button>
							</div>
						</div>
					</form>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		user: state.user.get("user")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...userActions }, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
