import * as React from "react";
import { connect } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import { modalActions } from "../../bus/modal/actions";
import { orderActions } from "../../bus/order/actions";
import { shoppingCartActions } from "../../bus/shoppingCart/actions";
import { history } from "../../init/middleware/core";
import VOCartItem from "../../VO/VOCartItem";
import { MODAL_TYPES } from "../Modals/Modals";
import ProductRow from "./ProductRow/ProductRow";
import Styles from "./Styles.module.scss";

interface IShoppingCartProps {
	isLoggedIn: boolean;
	totalAmount: string;
	items: VOCartItem[];
	actions: any;
}

export interface IShoppingCartState {}

class ShoppingCart extends React.Component<
	IShoppingCartProps,
	IShoppingCartState
> {
	_handleRemove = (item: VOCartItem) => {
		const { actions } = this.props;
		actions.removeItemAsync(item.item_id);
	};

	_handleAdd = (item: VOCartItem) => {
		const { actions } = this.props;
		const quantity = item.quantity + 1;
		actions.updateItemAsync({ item_id: item.item_id, quantity });
	};

	_handleMinus = (item: VOCartItem) => {
		const { actions } = this.props;
		const quantity = item.quantity - 1;

		if (quantity === 0) {
			actions.removeItemAsync(item.item_id);
		} else {
			actions.updateItemAsync({ item_id: item.item_id, quantity });
		}
	};

	_handleBack = () => {
		history.goBack();
	};

	_handleEmptyCart = () => {
		const { actions } = this.props;
		actions.emptyCartAsync();
	};

	_handleCreateOrder = () => {
		const { actions, isLoggedIn } = this.props;

		if (isLoggedIn) {
			actions.createOrderAsync();
		} else {
			actions.showModal({ modalType: MODAL_TYPES.LOGIN });
		}
	};

	_getProductRows = () => {
		const { items } = this.props;
		return (
			items &&
			items.map(item => {
				return (
					<ProductRow
						key={item.item_id}
						item={item}
						add={this._handleAdd}
						remove={this._handleRemove}
						minus={this._handleMinus}
					/>
				);
			})
		);
	};

	public render() {
		const { totalAmount } = this.props;
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
					<Col>
						<strong>TOTAL AMOUNT&nbsp;&nbsp;</strong> {totalAmount}$
					</Col>
					<Col>
						<Button
							size="lg"
							color="primary"
							outline
							onClick={this._handleEmptyCart}
						>
							Empty Cart
						</Button>
						<Button
							size="lg"
							color="primary"
							outline
							onClick={this._handleCreateOrder}
						>
							Order
						</Button>
					</Col>
				</Row>
				<Row className={Styles.HeadRow}>
					<Col> </Col>
					<Col>
						<strong>Name</strong>
					</Col>
					<Col>
						<strong>Attributes</strong>
					</Col>
					<Col>
						<strong>Price</strong>
					</Col>
					<Col>
						<strong>Quantity</strong>
					</Col>
					<Col>
						<strong>Subtotal</strong>
					</Col>
				</Row>
				{this._getProductRows()}
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		totalAmount: state.shoppingCart.get("totalAmount"),
		items: state.shoppingCart.get("items"),
		isLoggedIn: state.user.get("isLoggedIn")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...shoppingCartActions, ...orderActions, ...modalActions },
			dispatch
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoppingCart);
