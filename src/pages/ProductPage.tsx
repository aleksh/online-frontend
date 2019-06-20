import React from "react";
import { Col, Container, Row } from "reactstrap";
import Catcher from "../components/Catcher/Catcher";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Modals from "../components/Modals/Modals";
import Product from "../components/Product/Product";

interface IProductPageProps {}

const ProductPage: React.FunctionComponent<IProductPageProps> = (
	props: IProductPageProps
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
						<Product />
					</Col>
				</Row>
				<Footer />
			</Container>
			<Modals />
		</Catcher>
	);
};

export default ProductPage;
