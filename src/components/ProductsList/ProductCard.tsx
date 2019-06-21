import * as React from "react";
import { Badge, Card, CardBody, CardText } from "reactstrap";
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

	_getPrice = () => {
		const { item } = this.props;

		return (
			<>
                {item.discounted_price > 0 ? (
                    <>
				        <Badge className={Styles.Crossout} color="danger" pill>{item.price}</Badge>
				        <Badge color="success" pill>{item.discounted_price}</Badge>
                    </>
                ) : <Badge color="success" pill>{item.price}</Badge>
                }
			</>
		);
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
					<div className={Styles.Price}>{this._getPrice()}</div>
					<CardText>{item.description}</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default ProductCard;
