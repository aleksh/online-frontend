import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions } from "./bus/user/actions";
import Routers from "./navigation/Routers";

interface IAppProps {
	isLoggedIn: boolean;
	actions: any;
}

interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
	componentDidMount = () => {
		this.props.actions.authAsync();
	};

	public render() {
		const { isLoggedIn } = this.props;

		return <Routers isLoggedIn={isLoggedIn} />;
	}
}

const mapStateToProps = (state: any) => {
	return {
		isLoggedIn: state.user.get("isLoggedIn")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...userActions }, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
