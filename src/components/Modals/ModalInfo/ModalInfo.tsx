import { Modal } from "antd";
import * as React from "react";
import { connect } from "react-redux";
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
			<Modal
				title="Basic Modal"
				visible={true}
				onOk={this._handlerClosedPopup}
				onCancel={this._handlerClosedPopup}
			>
				<p>{message}</p>
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
