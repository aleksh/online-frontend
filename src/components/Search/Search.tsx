import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { productsActions } from "../../bus/products/actions";

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
			this.inputRef.current!.value = "";
		}
	};

	public render() {
		return (
			<div>
				<form onSubmit={this._handleSubmit}>
					<input type="text" name="search" ref={this.inputRef} />
					<input type="submit" value="Submit" />
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
