import React from "react";
import { Col, Container, Row } from "reactstrap";
import Catcher from "../Catcher/Catcher";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Modals from "../Modals/Modals";

export const LayoutHoC = Component => {
	const Layout = () => (
		<Catcher>
			<Container fluid>
				<Header />

				<Row className="content">
					<Col className="sidebar">
						<Categories />
					</Col>
					<Col>
						<Component  />
					</Col>
				</Row>
				<Footer />
			</Container>
			<Modals />
		</Catcher>
	);

	return Layout;
};
