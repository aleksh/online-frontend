import * as React from "react";

export interface IFooterProps {}
export interface IFooterState {}

class Footer extends React.Component<IFooterProps, IFooterState> {
	public render() {
		return (
			<footer style={{ height: "55px" }}>Footer</footer>
		);
	}
}

export default Footer;
