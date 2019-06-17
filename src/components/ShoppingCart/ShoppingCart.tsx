import { Button, Col, Row } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { shoppingCartActions } from "../../bus/shoppingCart/actions";
import { Path } from "../../navigation/path";
import VOCartItem from "../../VO/VOCartItem";

interface IShoppingCartProps {
	count: number;
	cart_id: number;
	totalAmount: string;
	items: VOCartItem[];
	actions: any;
}

export interface IShoppingCartState {}

class ShoppingCart extends React.Component<
	IShoppingCartProps,
	IShoppingCartState
> {
	_handleRemoveItem = (id: any) => {
		console.log(id);
		const { actions } = this.props;
		actions.removeItemAsync(id);
	};

	_handleAdd = (item_id: any, quantity: any) => {
		quantity++;
		console.log(quantity);
		const { actions } = this.props;
		actions.updateItemAsync({ item_id, quantity });
	};

	_handleMinus = (item_id: any, quantity: any) => {
		quantity--;
		console.log(quantity);
		const { actions } = this.props;

		if (quantity === 0) {
			actions.removeItemAsync(item_id);
		} else {
			actions.updateItemAsync({ item_id, quantity });
		}
	};

	_handleEmptyCart = () => {
		const { actions } = this.props;
		actions.emptyCartAsync();
	};

	public render() {
		const { count, totalAmount, items } = this.props;
		return (
			<>
				<div style={{ backgroundColor: "white" }}>
					<Button onClick={this._handleEmptyCart}>Empty Cart</Button>
					<Link to={Path.shippingAddress}>Place Order</Link>
				</div>
				<div style={{ backgroundColor: "white" }}>
					TOTAL AMOUNT {totalAmount}$
				</div>
				<Row gutter={16}>
					<Col span={4}> </Col>
					<Col span={4}>
						<strong>Name</strong>
					</Col>
					<Col span={4}>
						<strong>Attributes</strong>
					</Col>
					<Col span={4}>
						<strong>Price</strong>
					</Col>
					<Col span={4}>
						<strong>Quantity</strong>
					</Col>
					<Col span={4}>
						<strong>Subtotal</strong>
					</Col>
				</Row>
				{items &&
					items.map(item => {
						return (
							<Row key={item.item_id}>
								<Col span={4}>
									{" "}
									<Button
										onClick={() =>
											this._handleRemoveItem(item.item_id)
										}
									>
										Remove
									</Button>{" "}
								</Col>
								<Col span={4}>{item.name}</Col>
								<Col span={4}>{item.attributes}</Col>
								<Col span={4}>{item.price}</Col>
								<Col span={4}>
									<Button
										onClick={() =>
											this._handleAdd(
												item.item_id,
												item.quantity
											)
										}
									>
										Add
									</Button>
									{item.quantity}
									<Button
										onClick={() =>
											this._handleMinus(
												item.item_id,
												item.quantity
											)
										}
									>
										Minus
									</Button>
								</Col>
								<Col span={4}>{item.subtotal}</Col>
							</Row>
						);
					})}
			</>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		count: state.shoppingCart.get("count"),
		cart_id: state.shoppingCart.get("cart_id"),
		totalAmount: state.shoppingCart.get("totalAmount"),
		items: state.shoppingCart.get("items")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...shoppingCartActions }, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoppingCart);
