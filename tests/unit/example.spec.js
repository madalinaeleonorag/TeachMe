import Vuex from "vuex";
import { expect } from "chai";
import Ionic from "@ionic/vue";
import { IonicVueRouter } from "@ionic/vue";
import 'mutationobserver-shim';
// import sinon from "sinon";
// import sinonChai from "sinon-chai";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Login from '../../src/components/Login.vue'

// chai.use(sinonChai);

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Ionic);
localVue.use(IonicVueRouter);
localVue.component("BaseButton", Login);

describe("Unit tests", () => {
  let store;
  const getters = {
    isModalOpen: () => true,
    activeModalName: () => "baz"
  };
  const actions = {
    TOGGLE_MODAL: () => true
  };
  let component;
  // const mockMethod = sinon.spy();

  beforeEach(() => {
    store = new Vuex.Store({
      getters,
      actions
    });

    component = shallowMount(Login, {
      store,
      localVue,
    });
  });

  describe("Login component", () => {
    it("expects the name of the app to be at login screen", () => {
      // component.setMethods({ TOGGLE_MODAL: mockMethod });
      // component.find(".modal-close-btn").trigger("click");
      // expect(mockMethod).to.have.been.called.calledWith({
      //   isOpen: false,
      //   name: null
      // });
      expect(component.text().includes('TeachMe')).equal(true);
    });
  });
});