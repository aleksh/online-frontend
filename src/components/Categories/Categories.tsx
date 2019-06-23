import * as React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { categoriesActions } from "../../bus/categories/actions";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import Utils from "../../utils/Utils";
import VOCategory from "../../VO/VOCategory";
import CategoryItem from "./CategoryItem";
import Styles from "./Styles.module.scss";

interface ICategoriesProps {
	selectedCategory: VOCategory;
	categories: VOCategory[];
	actions: any;
}

export interface ICategoriesState {}

class Categories extends React.Component<ICategoriesProps, ICategoriesState> {
	componentDidMount = () => {
		const { actions, categories } = this.props;

		if (!categories || categories.length === 0) {
			actions.categoriesAsync();
		}
	};

	_handleClick = (item: VOCategory) => {
		const { actions } = this.props;

		const needClean = Utils.NeedProductsClean(history);
		if (needClean) {
			actions.cleanProducts();
		}

		history.push(`/${item.name}`);
		actions.changeCategory(item);
	};

	_getCategoriesList = (): any => {
		const { categories, selectedCategory } = this.props;

		return categories.map(item => {
			const active = selectedCategory
				? selectedCategory.category_id === item.category_id
				: false;
			return (
				<CategoryItem
					key={item.category_id}
					item={item}
					click={this._handleClick}
					active={active}
				/>
			);
		});
	};

	public render() {
		return (
			<ListGroup className={Styles.Categories}>
				<ListGroupItem>
					<h2>Categories</h2>
				</ListGroupItem>
				{this._getCategoriesList()}
			</ListGroup>
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
