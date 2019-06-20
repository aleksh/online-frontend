import * as React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { PRODUCT_IMAGE_URL } from "../../REST";
import VOProduct from "../../VO/VOProduct";
import Styles from "./Styles.module.scss";

interface IProductCardProps {
	item: VOProduct;
	click: any;
}

export interface IProductCardState {}

class ProductCard extends React.Component<
	IProductCardProps,
	IProductCardState
> {
	_handleClick = () => {
		const { item, click } = this.props;

		if (click) {
			click(item);
		}
	};

	public render() {
		const { item } = this.props;
		return (
			<Card onClick={this._handleClick}>
				<div className={Styles.ProductThumbnail}>
					<img
						src={PRODUCT_IMAGE_URL + item.thumbnail}
						alt={item.name}
					/>
				</div>
				<CardBody>
					<CardTitle>{item.name}</CardTitle>
					<CardText>{item.description}</CardText>

					<Button>Buy</Button>
				</CardBody>
			</Card>
		);
	}
}

export default ProductCard;
