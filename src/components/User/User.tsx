import * as React from "react";
import { connect } from "react-redux";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle
} from "reactstrap";
import { bindActionCreators } from "redux";
import { modalActions } from "../../bus/modal/actions";
import { userActions } from "../../bus/user/actions";
import { history } from "../../init/middleware/core";
import { Path } from "../../navigation/path";
import VOUser from "../../VO/VOUser";
import { MODAL_TYPES } from "../Modals/Modals";
import Styles from "./Styles.module.scss";

interface IUserProps {
	isLoggedIn: boolean;
	user: VOUser;
	actions: any;
}

export interface IUserState {
	dropdownOpen: boolean;
}

class User extends React.Component<IUserProps, IUserState> {
	constructor(props: IUserProps) {
		super(props);

		this.state = {
			dropdownOpen: false
		};
	}

	_toggle = () => {
		this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
	};

	_handlerLogin = (event: any) => {
		event.preventDefault();

		const { actions } = this.props;
		actions.showModal({ modalType: MODAL_TYPES.LOGIN });
	};

	_hendleRegister = (event: any) => {
		event.preventDefault();

		const { actions } = this.props;
		actions.showModal({ modalType: MODAL_TYPES.REGISTER });
	};

	_handlerLogout = (event: any) => {
		const { actions } = this.props;
		actions.logoutAsync();
	};

	_handleToMyBag = () => {
		history.push(Path.shoppingCart);
	};

	_handleToProfile = () => {
		history.push(Path.profile);
	};

	public render() {
		const { user, isLoggedIn } = this.props;
		return (
			<div className={Styles.user}>
				{isLoggedIn ? (
					<>
						<p>Hello</p>
						<Dropdown
							isOpen={this.state.dropdownOpen}
							toggle={this._toggle}
						>
							<DropdownToggle nav caret>
								{user.name}
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem onClick={this._handleToMyBag}>
									My Bag
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem onClick={this._handleToProfile}>
									Profile
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem onClick={this._handlerLogout}>
									Logout
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</>
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
