import Vue from 'vue';
import Component from '@/components/SubHeader';

describe('SubHeader.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('h1.title').textContent).to.equal('');
    expect(vm.$el.querySelector('h2.subtitle').textContent).to.equal('');
  });
});
