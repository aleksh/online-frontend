import { Layout } from "antd";
import React from "react";
import Catcher from "../components/Catcher/Catcher";
import Categories from "../components/Categories/Categories";
import Departments from "../components/Departments/Departments";
import Modals from "../components/Modals/Modals";

interface IMainPageProps {}

const MainPage: React.FunctionComponent<IMainPageProps> = (
	props: IMainPageProps
) => {
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<Catcher>
			<Layout>
				<Header>
					<Departments />
				</Header>
				<Layout>
					<Sider style={{ background: '#fff' }}>
						<Categories />
					</Sider>
					<Content style={{ background: "blue", minHeight: "calc(100vh - 119px)" }}>Content</Content>
				</Layout>
				<Footer style={{height:'55px'}}>Footer</Footer>
			</Layout>

			<Modals />
		</Catcher>
	);
};

export default MainPage;
