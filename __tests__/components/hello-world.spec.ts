import {shallowMount} from '@vue/test-utils';

import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('render', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {msg: 'hello-world.spec.ts'},
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
