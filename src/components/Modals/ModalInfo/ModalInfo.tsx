import * as React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { bindActionCreators } from "redux";
import { modalActions } from "../../../bus/modal/actions";

interface IModalInfoProps {
	modalProps: any;
	actions: any;
}

interface IModalInfoState {}

class ModalInfo extends React.Component<IModalInfoProps, IModalInfoState> {
	_handlerClosedPopup = () => {
		const { actions } = this.props;
		actions.hideModal();
	};

	_handlerOkPopup = () => {
		const { click, clickParams } = this.props.modalProps;

		if (click) {
			click(clickParams);
		}

		this._handlerClosedPopup();
	};

	public render() {
		const { message } = this.props.modalProps;
		return (
			<Modal isOpen={true} toggle={this._handlerClosedPopup}>
				<ModalHeader toggle={this._handlerClosedPopup} />
				<ModalBody><h2>{message}</h2></ModalBody>
				<ModalFooter>
					<Button size={"lg"} color="primary" onClick={this._handlerOkPopup}>
						Ok
					</Button>
				</ModalFooter>
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
)(ModalInfo);
