import loginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("loginForm", () => {
  it("emits an event with a user data payload", () => {
    const wrapper = mount(loginForm);
    // 1. Find text input
    const input = wrapper.find("input[type='text']");
    // 2. set value for text input
    input.setValue("Facundo");
    // 3. simulate form submission
    wrapper.trigger("submit");
    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);
    // 5. Assert payload is correct
    const expectedPayload = { name: "Facundo" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});
