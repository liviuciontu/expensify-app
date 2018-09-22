import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test("should render Header correctly", () => {
    const wrapper = shallow(<Header startLogout={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should call startLogut on button click", () => {
    const startLogut = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogut} />);
    wrapper.find("button").simulate("click");    
    expect(startLogut).toHaveBeenCalled();
});