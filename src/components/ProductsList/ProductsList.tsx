import { Card } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { productsActions } from "../../bus/products/actions";
import VOProduct from "../../VO/VOProduct";
import { PRODUCT_IMAGE_URL } from "../../REST";
import Styles from "./Styles.module.scss";

interface IProductsProps {
	products: VOProduct[];
	product: VOProduct;
	actions: any;
}

export interface IProductsState {}

class ProductsList extends React.Component<IProductsProps, IProductsState> {
	componentDidMount = () => {
		const { actions } = this.props;

		actions.productsAsync();
	};

	_handleClick = (event: any) => {
		const { actions } = this.props;

	/*	const id: string = event.target.getAttribute("itemid");
		actions.setSelectedCategoryId(id);*/
	};

	public render() {
		const { products } = this.props;
		const { Meta } = Card;
		console.log(products);
		return (
            <div className={Styles.ProductList}>
                {
                    products && 
                    products.map((item) => {
                        return <Card key={item.product_id}
                        hoverable
                        style={{ width: 240, margin:10 }}
                        cover={<img alt={item.name} src={PRODUCT_IMAGE_URL+item.thumbnail} />}
                      >
                        <Meta title={item.name} description={item.description} />
                      </Card>
                    })
                }

            </div>                        
			
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		products: state.products.get("products"),
		product: state.products.get("product")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...productsActions }, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsList);
