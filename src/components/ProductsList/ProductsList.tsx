import { Card, Pagination } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import { Path } from "../../navigation/path";
import { PRODUCT_IMAGE_URL } from "../../REST";
import { ITEMS_PER_PAGE } from "../../utils/Constants";
import VOProduct from "../../VO/VOProduct";
import Styles from "./Styles.module.scss";

interface IProductsListProps {
	products: VOProduct[];
	count: number;
	page: number;
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
		console.log("componentDidUpdate");
	};

	componentWillMount = () => {
		console.log("ProductsList componentWillMount");
	};

	_handleClick = (event: any) => {
		const id: string = event.currentTarget.getAttribute("data-item-id");
		history.push(`${Path.product}/${id}`);
	};

	_handlePagination = (curPage: any) => {
		console.log(curPage);
		const { actions } = this.props;

		actions.productsAsync({ page: curPage, limit: ITEMS_PER_PAGE });
	};

	public render() {
		const { products, count, page } = this.props;
		const { Meta } = Card;
		return (
			<>
				<Pagination
					current={page}
					total={count}
					pageSize={ITEMS_PER_PAGE}
					onChange={this._handlePagination}
				/>
				<div className={Styles.ProductList}>
					{products &&
						products.map(item => {
							return (
								<Card
									data-item-id={item.product_id}
									onClick={this._handleClick}
									key={item.product_id}
									hoverable
									style={{ width: 240, margin: 10 }}
									cover={
										<img
											alt={item.name}
											src={
												PRODUCT_IMAGE_URL +
												item.thumbnail
											}
										/>
									}
								>
									<Meta
										title={item.name}
										description={item.description}
									/>
								</Card>
							);
						})}
				</div>
			</>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		products: state.products.get("products"),
		count: state.products.get("count"),
		page: state.products.get("page")
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
