import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modalActions } from "./../../bus/modal/actions";
import { userActions } from "./../../bus/user/actions";
import ModalInfo from "./ModalInfo/ModalInfo";
import ModalLogin from "./ModalLogin/ModalLogin";
import ModalRegister from "./ModalRegister/ModalRegister";

interface IModalsProps {
	actions: any;
	modalType: string;
	modalProps: any;
}
interface IModalsState {}

export const MODAL_TYPES = {
	INFO: "INFO",
	LOGIN: "LOGIN",
	REGISTER: "REGISTER"
};

class Modals extends React.Component<IModalsProps, IModalsState> {
	public render() {
		const { modalType, modalProps, actions } = this.props;

		return (
			<>
				{modalType
					? (modalType === MODAL_TYPES.INFO && (
							<ModalInfo
								modalProps={modalProps}
								close={actions.hideModal}
							/>
					  )) ||
					  (modalType === MODAL_TYPES.LOGIN && (
							<ModalLogin
								modalProps={modalProps}
								actions={actions}
							/>
					  )) ||
					  (modalType === MODAL_TYPES.REGISTER && (
							<ModalRegister
								modalProps={modalProps}
								actions={actions}
							/>
					  ))
					: null}
			</>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		modalType: state.modal.get("modalType"),
		modalProps: state.modal.get("modalProps")
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
)(Modals);
