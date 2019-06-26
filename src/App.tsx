import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions } from "./bus/user/actions";
import Private from "./navigation/Private";
import Public from "./navigation/Public";

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

		return isLoggedIn ? <Private /> : <Public />;
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

//"start": "set HTTPS=true&&react-scripts start",
