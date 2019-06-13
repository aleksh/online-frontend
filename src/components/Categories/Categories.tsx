import { List } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { categoriesActions } from "../../bus/categories/actions";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import { ITEMS_PER_PAGE } from "../../utils/Constants";
import VOCategory from "../../VO/VOCategory";
import VODepartment from "../../VO/VODepartment";

interface ICategoriesProps {
	selectedDepartment: VODepartment;
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
		const { actions, categories, selectedDepartment } = this.props;

		const id: number = Number(event.target.getAttribute("itemid"));

		const selectedItem: VOCategory =
			categories.filter(item => id === item.category_id)[0] || null;

		if (selectedItem) {
			actions.setSelectedCategory(selectedItem);

			let url: string = `/${selectedItem.name}`;

			if (selectedDepartment) {
				url = `/${selectedDepartment.name}/${selectedItem.name}`;
			}

			history.push(url);
			actions.productsAsync({ page: 1, limit: ITEMS_PER_PAGE });
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
		selectedDepartment: state.departments.get("selectedDepartment"),
		categories: state.categories.get("categories")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...categoriesActions, ...productsActions }, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Categories);
