import * as React from "react";

export interface IFooterProps {}
export interface IFooterState {}

class Footer extends React.Component<IFooterProps, IFooterState> {
	public render() {
		return (
			<footer><p>&copy; 2019. All rights reserved.</p></footer>
		);
	}
}

export default Footer;
