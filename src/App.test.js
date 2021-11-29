/* Dependencies */
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Error from "./Error";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

describe("Error", () => {
	it("should render children inside a div tag", () => {
		const wrapper = shallow(<Error />);
		const stack = wrapper.find(Stack);
		const alert = stack.find(Alert);
		const paragraph = alert.find("div");
		expect(paragraph.text()).toEqual("Error detected — We're working on it!");
	});
});
