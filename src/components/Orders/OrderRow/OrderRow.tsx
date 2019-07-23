import * as React from "react";
import { Button, Col, Row } from "reactstrap";
import VOOrder from "../../../VO/VOOrder";
import Styles from "./Styles.module.scss";

interface IOrderRowProps {
	pay: Function;
	item: VOOrder;
}

interface IOrderRowState {}

class OrderRow extends React.Component<IOrderRowProps, IOrderRowState> {
	_handlePay = () => {
		const { pay, item } = this.props;

		if (pay) {
			pay(item);
		}
	};

	public render() {
		const { item } = this.props;
		return (
			<Row className={Styles.CardRow}>
				<Col>{item.order_id}</Col>
				<Col>{item.created_on}</Col>
				<Col>{item.total_amount}$</Col>
				<Col>{item.status}</Col>
				<Col>{item.shipped_on}$</Col>
				<Col>
					<Button
						size="lg"
						color="primary"
						outline
						onClick={this._handlePay}
					>
						Pay
					</Button>
				</Col>
			</Row>
		);
	}
}

export default OrderRow;
