import { Card } from "antd";
import { Button } from "antd/lib/radio";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { productsActions } from "../../bus/products/actions";
import { PRODUCT_IMAGE_URL } from "../../REST";
import VOProduct from "../../VO/VOProduct";
import Styles from "./Styles.module.scss";

interface IProductProps {
	product: VOProduct;
	match: any;
	history: any;
	actions: any;
}

export interface IProductState {}

class Product extends React.Component<IProductProps, IProductState> {
	componentDidMount = () => {
		const {
			actions,
			match: { params }
		} = this.props;
		actions.productAsync(params.id);
	};

	componentWillMount = () => {
		const { actions } = this.props;
		actions.cleanProduct();
	};

	_handleBack = () => {
		const { history } = this.props;
		history.goBack();
	};

	public render() {
		const { product } = this.props;
		const { Meta } = Card;
		console.log(product);
		return (
			<div className={Styles.Product}>
				<Button onClick={this._handleBack}>Back</Button>
				{product && (
					<Card
						hoverable
						style={{ width: 240, margin: 10 }}
						cover={
							<img
								alt={product.name}
								src={PRODUCT_IMAGE_URL + product.thumbnail}
							/>
						}
					>
						<Meta
							title={product.name}
							description={product.description}
						/>
					</Card>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		product: state.products.get("product")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...productsActions }, dispatch)
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Product) as any);
