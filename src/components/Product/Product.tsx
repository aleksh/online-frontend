import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import { productsActions } from "../../bus/products/actions";
import { shoppingCartActions } from "../../bus/shoppingCart/actions";
import { PRODUCT_IMAGE_URL } from "../../REST";
import VOAttribute from "../../VO/VOAttribute";
import VOProduct from "../../VO/VOProduct";
import ColorItem from "./ColorItem/ColorItem";
import PriceItem from "./PriceItem/PriceItem";
import SizeItem from "./SizeItem/SizeItem";
import Styles from "./Styles.module.scss";

interface IProductProps {
	product: VOProduct;
	productAttributes: any;
	match: any;
	history: any;
	actions: any;
}

export interface IProductState {
	color: VOAttribute;
	size: VOAttribute;
}

class Product extends React.Component<IProductProps, IProductState> {
	constructor(props: IProductProps) {
		super(props);

		this.state = {
			color: new VOAttribute(),
			size: new VOAttribute()
		};
	}

	static getDerivedStateFromProps(
		nextProps: IProductProps,
		prevState: IProductState
	) {
		if (
			nextProps.productAttributes &&
			(prevState.color.attribute_value_id === -1 ||
				prevState.size.attribute_value_id === -1)
		) {
			let color = null;
			let size = null;

			if (nextProps.productAttributes.Color) {
				color = nextProps.productAttributes.Color[0];
			}

			if (nextProps.productAttributes.Size) {
				size = nextProps.productAttributes.Size[0];
			}

			return {
				color,
				size
			};
		}

		return null;
	}

	componentDidMount = () => {
		const {
			actions,
			match: { params }
		} = this.props;
		actions.productAsync(params.id);
	};

	componentWillUnmount = () => {
		const { actions } = this.props;
		actions.cleanProduct();
	};

	_handleBack = () => {
		const { history } = this.props;
		history.goBack();
	};

	_handlerSelectColor = (item: VOAttribute) => {
		this.setState({ color: item });
	};

	_handlerSelectSize = (item: VOAttribute) => {
		this.setState({ size: item });
	};

	_handleAddToCart = () => {
		const { actions, product } = this.props;
		const { color, size } = this.state;

		actions.addProductAsync({
			product_id: product.product_id,
			attributes: `${color.attribute_value} ${size.attribute_value}`
		});
	};

	_getColors = () => {
		const { productAttributes } = this.props;
		const { color } = this.state;

		return productAttributes && productAttributes.Color
			? productAttributes.Color.map((item: VOAttribute) => {
					const isActive =
						color && color.attribute_value_id
							? item.attribute_value_id ===
							  color.attribute_value_id
							: false;

					return (
						<ColorItem
							key={item.attribute_value_id}
							click={this._handlerSelectColor}
							item={item}
							active={isActive}
						/>
					);
			  })
			: null;
	};

	_getSizes = () => {
		const { productAttributes } = this.props;
		const { size } = this.state;

		return productAttributes && productAttributes.Size
			? productAttributes.Size.map((item: VOAttribute) => {
					const isActive =
						size && size.attribute_value_id
							? item.attribute_value_id ===
							  size.attribute_value_id
							: false;

					return (
						<SizeItem
							key={item.attribute_value_id}
							click={this._handlerSelectSize}
							item={item}
							active={isActive}
						/>
					);
			  })
			: null;
	};

	public render() {
		const { product } = this.props;

		return (
			<>
				{product ? (
					<div className={Styles.Product}>
						<div>
							<Button
								size="lg"
								color="primary"
								outline
								onClick={this._handleBack}
							>
								Back
							</Button>
						</div>
						<div className={Styles.Image}>
							<img
								src={PRODUCT_IMAGE_URL + product.image}
								alt={product.name}
							/>
						</div>
						<div className={Styles.Description}>
							<h1>{product.name}</h1>
							<div className={Styles.Price}>
								<PriceItem item={product} />
							</div>
							<p>{product.description}</p>
							<div className={Styles.Properties}>
								<div className={Styles.Colors}>
									<p>Color:</p>
									{this._getColors()}
								</div>

								<div className={Styles.Sizes}>
									<p>Size:</p>
									{this._getSizes()}
								</div>
							</div>
							<div className={Styles.addToCard}>
								<Button
									size="lg"
									color="primary"
									outline
									onClick={this._handleAddToCart}
								>
									Add To Cart
								</Button>
							</div>
						</div>
					</div>
				) : null}
			</>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		product: state.products.get("product"),
		productAttributes: state.products.get("productAttributes")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...productsActions, ...shoppingCartActions },
			dispatch
		)
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Product) as any);
