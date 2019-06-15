import { Layout } from "antd";
import React from "react";
import Catcher from "../components/Catcher/Catcher";
import Categories from "../components/Categories/Categories";
import Departments from "../components/Departments/Departments";
import Modals from "../components/Modals/Modals";
import Product from "../components/Product/Product";
import Search from "../components/Search/Search";

interface IProductPageProps {}

const ProductPage: React.FunctionComponent<IProductPageProps> = (
	props: IProductPageProps
) => {
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<Catcher>
			<Layout>
				<Header>
					<Departments />                    
                    <Search />
				</Header>
				<Layout>
					<Sider style={{ background: "#fff" }}>
						<Categories />
					</Sider>
					<Content
						style={{
							background: "green",
							minHeight: "calc(100vh - 119px)"
						}}
					>
						<Product />
					</Content>
				</Layout>
				<Footer style={{ height: "55px" }}>Footer</Footer>
			</Layout>

			<Modals />
		</Catcher>
	);
};

export default ProductPage;
