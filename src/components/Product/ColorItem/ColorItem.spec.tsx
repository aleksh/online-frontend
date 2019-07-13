import { shallow } from "enzyme";
import React from "react";
import ColorItem from "./ColorItem";

describe("ColorItem", () => {
	let wrapper;
	const mockClick = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
			<ColorItem
				item={{
					attribute_name: "Color",
					attribute_value_id: 6,
					attribute_value: "White"
				}}
				active={false}
				click={mockClick}
			/>
		);
	});

	describe("TaskRow rendering", () => {
		it("render correctly TaskRow component", () => {
			expect(wrapper).toMatchSnapshot();
		});

		it("should have 1 span", () => {
			expect(wrapper.find("span")).toHaveLength(1);
		});

		it("render correct Click prop type", () => {
			expect(wrapper.props().onClick).toBeInstanceOf(Function);
		});

		it("render correct className prop type", () => {
			expect(wrapper.props().className).toBe("Color");
		});

		it("render correct className prop type", () => {
			expect(wrapper.simulate("click", { preventDefault: () =>{} }));
			expect(mockClick.mock.calls.length).toEqual(1);
		});
	});
});
