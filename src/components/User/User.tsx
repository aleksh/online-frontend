import { Button } from "antd/lib/radio";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modalActions } from "../../bus/modal/actions";
import { MODAL_TYPES } from "../Modals/Modals";

interface IUserProps {
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

	public render() {
		return (
			<div style={{ background: "white" }}>
				<Button onClick={this._handlerLogin}>Login</Button>
				<Button onClick={this._hendleRegister}>Register</Button>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		product: state.products.get("product")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...modalActions }, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);
