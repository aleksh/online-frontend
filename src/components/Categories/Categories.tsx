import * as React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { categoriesActions } from "../../bus/categories/actions";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import VOCategory from "../../VO/VOCategory";
import CategoryItem from "./CategoryItem";
import Styles from "./Styles.module.scss";

interface ICategoriesProps {
	selectedCategory: VOCategory;
	filteredCategories: VOCategory[];
	actions: any;
}

export interface ICategoriesState {}

class Categories extends React.Component<ICategoriesProps, ICategoriesState> {
	componentDidMount = () => {
		const { actions, filteredCategories } = this.props;

		if (!filteredCategories || filteredCategories.length === 0) {
			actions.categoriesAsync();
		}
	};

	_handleClick = (item: VOCategory) => {
		const { actions } = this.props;

		history.push(`/${item.name}`);
		actions.changeCategory(item);
	};

	_getCategoriesList = (): any => {
		const { filteredCategories, selectedCategory } = this.props;

		return filteredCategories.map(item => {
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
		filteredCategories: state.categories.get("filteredCategories")
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
