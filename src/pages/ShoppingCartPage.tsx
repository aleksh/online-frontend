import { Layout } from "antd";
import React from "react";
import Catcher from "../components/Catcher/Catcher";
import Categories from "../components/Categories/Categories";
import Departments from "../components/Departments/Departments";
import HeaderBag from "../components/HeaderBag/HeaderBag";
import Modals from "../components/Modals/Modals";
import Search from "../components/Search/Search";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import User from "../components/User/User";

interface IShoppingCartProps {}

const ShoppingCartPage: React.FunctionComponent<IShoppingCartProps> = (
	props: IShoppingCartProps
) => {
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<Catcher>
			<Layout>
				<Header>
					<div style={{ display: "flex" }}>
						<div style={{ width: "20%", float: "left" }}>
							<User />
						</div>
						<div style={{ width: "40%", float: "left" }}>
							<Departments />
						</div>
						<div style={{ width: "20%", float: "left" }}>
							<Search />
						</div>
						<div style={{ width: "20%" }}>
							<HeaderBag />
						</div>
					</div>
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
						<ShoppingCart />
					</Content>
				</Layout>
				<Footer style={{ height: "55px" }}>Footer</Footer>
			</Layout>

			<Modals />
		</Catcher>
	);
};

export default ShoppingCartPage;
