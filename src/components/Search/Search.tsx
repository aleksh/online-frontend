import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ReactComponent as IconSearch } from "../../assets/images/icon-search.svg";
import { productsActions } from "../../bus/products/actions";
import { history } from "../../init/middleware/core";
import Styles from "./Styles.module.scss";

interface ISearchProps {
	actions: any;
}

export interface ISearchState {}

class Search extends React.Component<ISearchProps, ISearchState> {
	inputRef: React.RefObject<HTMLInputElement>;

	constructor(props: ISearchProps) {
		super(props);
		this.inputRef = React.createRef();
	}

	_handleSubmit = (event: any) => {
		event.preventDefault();
		const search: string = this.inputRef.current!.value;

		if (search && search.length > 0) {
			this.props.actions.searchAsync(search);
			history.push("/");
			this.inputRef.current!.value = "";
			this.inputRef.current!.blur();
		}
	};

	public render() {
		return (
			<div className={Styles.search}>
				<form onSubmit={this._handleSubmit}>
					<input type="search" name="search" ref={this.inputRef} />
					<button type="submit" value="">
						<IconSearch width={20} height={20} />
					</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...productsActions }, dispatch)
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Search);
