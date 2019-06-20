import React from "react";
import { Col, Container, Row } from "reactstrap";
import Catcher from "../components/Catcher/Catcher";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Modals from "../components/Modals/Modals";
import ShippingAddress from "../components/ShippingAddress/ShippingAddress";

interface IShippingAddressProps {}

const ShippingAddressPage: React.FunctionComponent<IShippingAddressProps> = (
	props: IShippingAddressProps
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
						<ShippingAddress />
					</Col>
				</Row>
				<Footer />
			</Container>
			<Modals />
		</Catcher>
	);
};

export default ShippingAddressPage;
