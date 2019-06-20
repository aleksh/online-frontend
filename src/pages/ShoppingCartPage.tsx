import React from "react";
import { Col, Container, Row } from "reactstrap";
import Catcher from "../components/Catcher/Catcher";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Modals from "../components/Modals/Modals";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

interface IShoppingCartProps {}

const ShoppingCartPage: React.FunctionComponent<IShoppingCartProps> = (
	props: IShoppingCartProps
) => {
	return (
		<Catcher>
			<Container fluid>
				<Header />

				<Row className="content">
					<Col className="sidebar">
						<Categories />
					</Col>
					<Col>
						<ShoppingCart />
					</Col>
				</Row>
				<Footer />
			</Container>
			<Modals />
		</Catcher>
	);
};

export default ShoppingCartPage;
