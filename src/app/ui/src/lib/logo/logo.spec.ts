import { mount } from '@vue/test-utils';
import Logo from './logo.vue';

describe('Logo', () => {
  it('renders properly', () => {
    const wrapper = mount(Logo, {});
    expect(wrapper.text()).toContain('brendanrice');
  });
});
