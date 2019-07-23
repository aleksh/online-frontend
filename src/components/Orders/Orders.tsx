import * as React from "react";
import { connect } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import { orderActions } from "../../bus/order/actions";
import { history } from "../../init/middleware/core";
import { Path } from "../../navigation/path";
import VOOrder from "../../VO/VOOrder";
import OrderRow from "./OrderRow/OrderRow";
import Styles from "./Styles.module.scss";

interface IOrdersProps {
	orders: [VOOrder];
	actions: any;
}

interface IOrdersState {}

class Orders extends React.Component<IOrdersProps, IOrdersState> {
	componentDidMount = () => {
		const { actions } = this.props;

		actions.fetchOrdersAsync();
	};

	_handleBack = () => {
		history.goBack();
	};

	_handlePay = (item: VOOrder) => {
        const { actions } = this.props;
        actions.setOrderForPay(item);
		console.log("PAYYYY ");
		history.push(Path.pay);
	};

	_getProductRows = () => {
		const { orders } = this.props;
		return (
			orders &&
			orders.map(item => {
				return (
					<OrderRow
						pay={this._handlePay}
						item={item}
						key={item.order_id}
					/>
				);
			})
		);
	};

	public render() {
		return (
			<Container className={Styles.ShoppingCard}>
				<Row className={Styles.TopRow}>
					<Col>
						<Button
							size="lg"
							color="primary"
							outline
							onClick={this._handleBack}
						>
							Back
						</Button>
					</Col>
					<Col>ORDERS</Col>
					<Col>&nbsp;</Col>
				</Row>
				<Row className={Styles.HeadRow}>
					<Col>
						<strong>ID</strong>
					</Col>
					<Col>
						<strong>Created On</strong>
					</Col>
					<Col>
						<strong>Total Amount</strong>
					</Col>
					<Col>
						<strong>Status</strong>
					</Col>
					<Col>
						<strong>Shipped On</strong>
					</Col>
					<Col />
				</Row>
				{this._getProductRows()}
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		orders: state.order.get("orders")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...orderActions }, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Orders);
