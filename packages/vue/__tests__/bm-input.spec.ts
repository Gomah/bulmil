import { mount } from '@vue/test-utils';
import { BmInput } from '../src';

describe('BmInput', () => {
  it('should set events on handler', () => {
    const Component = {
      template: `<BmInput v-on:click="$emit('click')"></BmInput>`,
    };
    const onClick = jest.fn();
    const wrapper = mount(Component, {
      components: { BmInput },
      listeners: {
        click: onClick,
      },
    });

    wrapper.find('bm-input').trigger('click');
    expect(onClick).toBeCalledTimes(1);
  });
});
