import * as React from "react";
import { connect } from "react-redux";
import ModalConfirm from "./ModalConfirm/ModalConfirm";
//actions
import ModalInfo from "./ModalInfo/ModalInfo";
import ModalLogin from "./ModalLogin/ModalLogin";
import ModalRegister from "./ModalRegister/ModalRegister";

interface IModalsProps {
	modalType: string;
	modalProps: any;
}
interface IModalsState {}

export const MODAL_TYPES = {
	INFO: "INFO",
	LOGIN: "LOGIN",
	REGISTER: "REGISTER",
	CONFIRM_INVITE: "CONFIRM_INVITE"
};

class Modals extends React.Component<IModalsProps, IModalsState> {
	public render() {
		const { modalType, modalProps } = this.props;

		return (
			<>
				{modalType
					? (modalType === MODAL_TYPES.INFO && (
							<ModalInfo modalProps={modalProps} />
					  )) ||
					  (modalType === MODAL_TYPES.CONFIRM_INVITE && (
							<ModalConfirm modalProps={modalProps} />
					  )) ||
					  (modalType === MODAL_TYPES.LOGIN && (
							<ModalLogin modalProps={modalProps} />
					  )) ||
					  (modalType === MODAL_TYPES.REGISTER && (
							<ModalRegister modalProps={modalProps} />
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

export default connect(
	mapStateToProps,
	null
)(Modals);
