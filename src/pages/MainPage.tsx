import React from "react";
import Catcher from "../components/Catcher/Catcher";
import Modals from "../components/Modals/Modals";
import Button from "antd/lib/button";
import Categories from "../components/Categories/Categories";

interface IMainPageProps {}

const MainPage: React.FunctionComponent<IMainPageProps> = (
	props: IMainPageProps
) => {    
	return (
		<Catcher>
			<div className="container-fluid">
				<Categories />                 
                <Button type="primary">Button</Button>
				
			</div>
			<Modals />
		</Catcher>
	);
};

export default MainPage;
