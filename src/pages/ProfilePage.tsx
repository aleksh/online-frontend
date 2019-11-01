import React from "react";
import { LayoutHoC } from "../components/Layout/Layout";
import Profile from "../components/Profile/Profile";

interface IProfilePageProps {}

const ProfilePage: React.FunctionComponent<IProfilePageProps> = () => {
	return <Profile />;
};

export default LayoutHoC(ProfilePage);
