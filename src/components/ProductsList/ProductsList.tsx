import { Pagination } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import { Path } from "../../navigation/path";
import { ITEMS_PER_PAGE } from "../../utils/Constants";
import VOProduct from "../../VO/VOProduct";
import ProductCard from "./ProductCard";
import Styles from "./Styles.module.scss";

interface IProductsListProps {
	products: VOProduct[];
	count: number;
	page: number;
	search: string;
	actions: any;
}

export interface IProductsListState {}

class ProductsList extends React.Component<
	IProductsListProps,
	IProductsListState
> {
	componentDidMount = () => {
		const { actions, products, page } = this.props;

		if (products.length === 0) {
			actions.productsAsync({ page, limit: ITEMS_PER_PAGE });
		}

		console.log("ProductsList conponentDidMount");
	};

	componentDidUpdate = () => {
		console.log(
			"ProductsList ---------------------------componentDidUpdate"
		);
	};

	componentWillMount = () => {
		console.log("ProductsList componentWillMount");
	};

	_handleClick = (item: VOProduct) => {
		history.push(`${Path.product}/${item.product_id}`);
	};

	_handlePagination = (curPage: any) => {
		const { actions } = this.props;

		actions.productsAsync({ page: curPage, limit: ITEMS_PER_PAGE });
	};

	_getProductList = (): any => {
		const { products } = this.props;

		if (!products) return null;

		return products.map(item => {
			return (
				<ProductCard
					key={item.product_id}
					item={item}
					click={this._handleClick}
				/>
			);
		});
	};

	public render() {
		const { products, count, page, search } = this.props;
		return (
			<>
				{search.length > 0 && (
					<p>
						Search For: <strong>{search}</strong>
					</p>
				)}
				<Pagination
					current={page}
					total={count}
					pageSize={ITEMS_PER_PAGE}
					onChange={this._handlePagination}
				/>
				<div className={Styles.ProductList}>
                {this._getProductList()}
				</div>
			</>
		);
	}
}


const mapStateToProps = (state: any) => {
	return {
		products: state.products.get("products"),
		count: state.products.get("count"),
		page: state.products.get("page"),
		search: state.products.get("search")
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
