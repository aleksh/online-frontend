import { Button } from "antd/lib/radio";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modalActions } from "../../bus/modal/actions";
import { userActions } from "../../bus/user/actions";
import VOUser from "../../VO/VOUser";
import { MODAL_TYPES } from "../Modals/Modals";

interface IUserProps {
	isLoggedIn: boolean;
	user: VOUser;
	actions: any;
}

export interface IUserState {}

class User extends React.Component<IUserProps, IUserState> {
	_handlerLogin = () => {
		console.log("login");

		const { actions } = this.props;
		actions.showModal({ modalType: MODAL_TYPES.LOGIN });
	};

	_hendleRegister = () => {
		console.log("register");
		const { actions } = this.props;
		actions.showModal({ modalType: MODAL_TYPES.REGISTER });
	};

	_handlerLogout = () => {
		console.log("logout");
		const { actions } = this.props;
		actions.logoutAsync();
	};

	public render() {
		const { user, isLoggedIn } = this.props;
		return (
			<div style={{ background: "white" }}>
				{isLoggedIn ? (
					<>
						<p>
							Hello {user.name}
							<Button onClick={this._handlerLogout}>
								Logout
							</Button>
						</p>
					</>
				) : (
					<p>
						<Button onClick={this._handlerLogin}>Login</Button>
						<Button onClick={this._hendleRegister}>Register</Button>
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
