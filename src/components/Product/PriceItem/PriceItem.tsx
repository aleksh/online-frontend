import React from "react";
import { Badge } from "reactstrap";
import VOProduct from "../../../VO/VOProduct";
import Styles from "./Styles.module.scss";

interface IPriceItemProps {
	item: VOProduct;
}

const PriceItem: React.FunctionComponent<IPriceItemProps> = (
	props: IPriceItemProps
) => {
	const { item } = props;

	return (
		<>
			{item.discounted_price > 0 ? (
				<>
					<Badge className={Styles.Crossout} color="danger" pill>
						{item.price}
					</Badge>
					<Badge color="success" pill>
						{item.discounted_price}
					</Badge>
				</>
			) : (
				<Badge color="success" pill>
					{item.price}
				</Badge>
			)}
		</>
	);
};

export default PriceItem;
