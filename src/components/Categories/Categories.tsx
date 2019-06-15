import { List } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { categoriesActions } from "../../bus/categories/actions";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import VOCategory from "../../VO/VOCategory";

interface ICategoriesProps {
	selectedCategory: VOCategory;
	categories: VOCategory[];
	actions: any;
}

export interface ICategoriesState {}

class Categories extends React.Component<ICategoriesProps, ICategoriesState> {
	componentDidMount = () => {
		const { actions, categories } = this.props;

		if (categories.length === 0) {
			actions.categoriesAsync();
		}
	};

	_handleClick = (event: any) => {
		const { actions, categories, selectedCategory } = this.props;

		const id: number = Number(event.target.getAttribute("itemid"));

		if (!selectedCategory || selectedCategory.category_id !== id) {
			const selectedItem: VOCategory =
				categories.filter(item => id === item.category_id)[0] || null;

			if (selectedItem) {
				history.push(`/${selectedItem.name}`);
				actions.changeCategory(selectedItem);
			}
		}
	};

	public render() {
		const { categories } = this.props;
		console.log(categories);
		return (
			<List
				loading={categories.length === 0}
				header={
					<div>
						<strong>Categories</strong>
					</div>
				}
				bordered
				dataSource={categories}
				renderItem={item => (
					<List.Item
						itemID={`${item.category_id}`}
						onClick={this._handleClick}
					>
						{item.name}
					</List.Item>
				)}
			/>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		selectedCategory: state.categories.get("selectedCategory"),
		categories: state.categories.get("categories")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...categoriesActions, ...productsActions },
			dispatch
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Categories);
