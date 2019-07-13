import * as React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface IModalInfoProps {
	modalProps: any;
	close: any;
}

interface IModalInfoState {}

class ModalInfo extends React.Component<IModalInfoProps, IModalInfoState> {
	_handlerClosedPopup = () => {
		const { close } = this.props;

		if (close) {
			close();
		}
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
				<ModalBody>
					<h2>{message}</h2>
				</ModalBody>
				<ModalFooter>
					<Button
						size={"lg"}
						color="primary"
						onClick={this._handlerOkPopup}
					>
						Ok
					</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

export default ModalInfo;
