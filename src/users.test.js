import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import User from './pages/users/users';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import { render, screen } from "@testing-library/react";
import write from 'write';
import testResult from './test.json'
import fs from 'fs'

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

let appTestResult = false

describe("rest todo", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("Unit Testing");
    expect(linkElement).toBeInTheDocument()
    appTestResult = true
    testResult.APP_TEST = appTestResult
    write.sync('foo.txt', `renders learn react link : ${appTestResult}`, { overwrite: true })
  })
});



describe("test of User Component Form", () => {
  let wrapper;
  false;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <User />
      </Provider>
    );
  });
  wrapper;

  test("add new post", () => {
    const handleSubmit = jest.fn();
    const instance = wrapper.instance();
    const submitBtn = wrapper.find("#form");
    submitBtn.simulate('click')
    expect(handleSubmit).toHaveBeenCalled();

    //input.simulate("focus");
    // input.simulate("change", { target: { value: "Changed" } });
    //wrapper.find("#addMainTodo").simulate("click");
    //expect(wrapper.text().includes("Changed")).toBe(true);
  });

  /*  test("delete todo", () => {
     const input = wrapper.find("#mainInput");
     input.simulate("focus");
     input.simulate("change", { target: { value: "Changed" } });
     wrapper.find("#addMainTodo").simulate("click");
     input.simulate("change", { target: { value: "veer" } });
     wrapper.find("#addMainTodo").simulate("click");
     input.simulate("change", { target: { value: "suman" } });
     wrapper.find("#addMainTodo").simulate("click");
     wrapper.find("#btn2").simulate("click");
     expect(wrapper.text().includes("veer")).toBe(false);
   });
 
   test("edit todo", () => {
     const input = wrapper.find("#mainInput");
     input.simulate("focus");
     input.simulate("change", { target: { value: "Changed" } });
     wrapper.find("#addMainTodo").simulate("click");
     input.simulate("change", { target: { value: "veer" } });
     wrapper.find("#addMainTodo").simulate("click");
     input.simulate("change", { target: { value: "suman" } });
     wrapper.find("#addMainTodo").simulate("click");
     wrapper.find("#btnEdit2").simulate("click");
     wrapper
       .find("#input2")
       .simulate("change", { target: { value: "awesome" } });
     wrapper.find("#btnUpdate2").simulate("click");
     expect(wrapper.text().includes("veer")).toBe(false);
     expect(wrapper.text().includes("awesome")).toBe(true);
   }); */
});


/*

describe("test of Todo component", () => {
    let wrapper;
    false;
    beforeEach(() => {
      wrapper = shallow(<Todo />);
    });
    wrapper;

    test("add new todo", () => {
      const input = wrapper.find("#mainInput");
      input.simulate("focus");
      input.simulate("change", { target: { value: "Changed" } });
      wrapper.find("#addMainTodo").simulate("click");
      expect(wrapper.text().includes("Changed")).toBe(true);
    });

    test("delete todo", () => {
      const input = wrapper.find("#mainInput");
      input.simulate("focus");
      input.simulate("change", { target: { value: "Changed" } });
      wrapper.find("#addMainTodo").simulate("click");
      input.simulate("change", { target: { value: "veer" } });
      wrapper.find("#addMainTodo").simulate("click");
      input.simulate("change", { target: { value: "suman" } });
      wrapper.find("#addMainTodo").simulate("click");
      wrapper.find("#btn2").simulate("click");
      expect(wrapper.text().includes("veer")).toBe(false);
    });

    test("edit todo", () => {
      const input = wrapper.find("#mainInput");
      input.simulate("focus");
      input.simulate("change", { target: { value: "Changed" } });
      wrapper.find("#addMainTodo").simulate("click");
      input.simulate("change", { target: { value: "veer" } });
      wrapper.find("#addMainTodo").simulate("click");
      input.simulate("change", { target: { value: "suman" } });
      wrapper.find("#addMainTodo").simulate("click");
      wrapper.find("#btnEdit2").simulate("click");
      wrapper
        .find("#input2")
        .simulate("change", { target: { value: "awesome" } });
      wrapper.find("#btnUpdate2").simulate("click");
      expect(wrapper.text().includes("veer")).toBe(false);
      expect(wrapper.text().includes("awesome")).toBe(true);
    });
  });
 */




/* describe("rest todo", () => {

    it('Should submit the post after clicking', () => {
        const testComponent = shallow(
            <Provider store={store}>
                <User />
            </Provider>
        )
        const toggleButton = testComponent.find('button');
        toggleButton.simulate('click');
    });
}); */
