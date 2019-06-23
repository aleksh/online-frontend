import * as React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import { PRODUCT_IMAGE_URL } from "../../REST";
import VOProduct from "../../VO/VOProduct";
import PriceItem from "../Product/PriceItem/PriceItem";
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
			<Card className={Styles.ProductCard} onClick={this._handleClick}>
				<CardBody>
					<h3>{item.name}</h3>

					<div className={Styles.ProductThumbnail}>
						<img
							src={PRODUCT_IMAGE_URL + item.thumbnail}
							alt={item.name}
						/>
					</div>
					<div className={Styles.Price}>
						<PriceItem item={item} />
					</div>
					<CardText>{item.description}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default ProductCard;
