import cx from "classnames";
import moment from "moment";
import Pagination from "rc-pagination";
import * as React from "react";
import { REVIEWS_PER_PAGE } from "../../../utils/Constants";
import locale from "../../../utils/en_US";
import VOReview from "../../../VO/VOReview";
import Styles from "./Styles.module.scss";

interface IProductReviewsProps {
	reviews: VOReview[];
}

export interface IProductReviewsState {
	count: number;
	page: number;
	items: any;
}

class ProductReviews extends React.Component<
	IProductReviewsProps,
	IProductReviewsState
> {
	constructor(props: IProductReviewsProps) {
		super(props);

		this.state = {
			count: 0,
			page: 1,
			items: []
		};
	}

	static getDerivedStateFromProps(
		nextProps: IProductReviewsProps,
		prevState: IProductReviewsState
	) {
		if (nextProps.reviews && prevState.count !== nextProps.reviews.length) {
			return {
				count: nextProps.reviews.length,
				page: 1,
				items: nextProps.reviews
					? nextProps.reviews.slice(0, REVIEWS_PER_PAGE)
					: []
			};
		}

		return null;
	}

	_getReviews = () => {
		const { items } = this.state;

		return (
			items &&
			items.map((item: VOReview) => {
				return (
					<div key={item.created_on} className={Styles.Review}>
						<div>
							<h2>{item.name}</h2>
							<span>{moment(item.created_on).format("LL")}</span>
						</div>
						<p>{item.review}</p>
					</div>
				);
			})
		);
	};

	_handlePagination = (curPage: any) => {
		const { reviews } = this.props;
		const startIndex = (curPage - 1) * REVIEWS_PER_PAGE;
		const items = reviews
			? reviews.slice(startIndex, startIndex + REVIEWS_PER_PAGE)
			: [];

		this.setState({
			page: curPage,
			items: items
		});
	};

	public render() {
		const { count, page } = this.state;
		const pgClass = cx({ [Styles.Hide]: count <= REVIEWS_PER_PAGE });

		return (
			<div className={Styles.ReviewRow}>
				<Pagination
					className={pgClass}
					current={page}
					total={count}
					locale={locale}
					pageSize={REVIEWS_PER_PAGE}
					onChange={this._handlePagination}
				/>
				{this._getReviews()}
			</div>
		);
	}
}

export default ProductReviews;
