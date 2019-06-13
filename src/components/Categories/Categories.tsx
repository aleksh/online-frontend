import { List } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { categoriesActions } from "../../bus/categories/actions";
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
		const { actions } = this.props;

		const id: string = event.target.getAttribute("itemid");
		actions.setSelectedCategoryId(id);
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
						itemID={item.category_id}
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
		actions: bindActionCreators({ ...categoriesActions }, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Categories);
