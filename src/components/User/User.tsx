import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modalActions } from "../../bus/modal/actions";
import { userActions } from "../../bus/user/actions";
import VOUser from "../../VO/VOUser";
import { MODAL_TYPES } from "../Modals/Modals";
import Styles from "./Styles.module.scss";

interface IUserProps {
	isLoggedIn: boolean;
	user: VOUser;
	actions: any;
}

export interface IUserState {}

class User extends React.Component<IUserProps, IUserState> {
	_handlerLogin = (event: any) => {
		event.preventDefault();
		console.log("login");

		const { actions } = this.props;
		actions.showModal({ modalType: MODAL_TYPES.LOGIN });
	};

	_hendleRegister = (event: any) => {
		event.preventDefault();
		console.log("register");
		const { actions } = this.props;
		actions.showModal({ modalType: MODAL_TYPES.REGISTER });
	};

	_handlerLogout = (event: any) => {
		event.preventDefault();
		console.log("logout");
		const { actions } = this.props;
		actions.logoutAsync();
	};

	public render() {
		const { user, isLoggedIn } = this.props;
		return (
			<div className={Styles.user}>
				{isLoggedIn ? (
					<p>
						Hello {user.name}
						<a href="#" onClick={this._handlerLogout}>
							Logout
						</a>
					</p>
				) : (
					<p>
						Hi!&nbsp;
						<a href="#" onClick={this._handlerLogin}>
							Sign in
						</a>
						&nbsp;or&nbsp;
						<a href="#" onClick={this._hendleRegister}>
							Register
						</a>
					</p>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		user: state.user.get("user"),
		isLoggedIn: state.user.get("user")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...modalActions, ...userActions },
			dispatch
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);
