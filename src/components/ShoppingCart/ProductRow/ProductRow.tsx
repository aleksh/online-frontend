import * as React from "react";
import { Button, Col, Row } from "reactstrap";
import VOCartItem from "../../../VO/VOCartItem";
import Styles from "./Styles.module.scss";

interface IProductRowProps {
	remove: any;
	add: any;
	minus: any;
	item: VOCartItem;
}

export interface IProductRowState {}

class ProductRow extends React.Component<IProductRowProps, IProductRowState> {
	_handleRemove = () => {
		const { remove, item } = this.props;

		if (remove) {
			remove(item);
		}
	};

	_handleAdd = () => {
		const { add, item } = this.props;

		if (add) {
			add(item);
		}
	};

	_handleMinus = () => {
		const { minus, item } = this.props;

		if (minus) {
			minus(item);
		}
	};

	public render() {
		const { item } = this.props;
		return (
			<Row>
				<Col>
					<Button
						size="lg"
						color="primary"
						outline
						onClick={this._handleRemove}
					>
						Remove
					</Button>
				</Col>
				<Col>{item.name}</Col>
				<Col>{item.attributes}</Col>
				<Col>{item.price}$</Col>
				<Col>
					<Button
						outline
						color="primary"
						active
						onClick={this._handleAdd}
					>
						+
					</Button>
					<span className={Styles.Quantity}>{item.quantity}</span>
					<Button
						outline
						color="primary"
						active
						onClick={this._handleMinus}
					>
						-
					</Button>
				</Col>
				<Col>{item.subtotal}$</Col>
			</Row>
		);
	}
}

export default ProductRow;
