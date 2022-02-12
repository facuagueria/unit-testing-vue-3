import MessageContainer from "@/components/MessageContainer.vue";
import { mount } from "@vue/test-utils";

describe("MessageContainer", () => {
  it("Calls getMessage and displays message", async () => {
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: '<p v-else data-testid="message">Hello from the db!</p>',
          },
        },
      },
    });
    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toEqual("Hello from the db!");
  });
});
