import Vue from "vue";

const foo = {
  render: (h) => h("div", "foo"),
};

const bar = {
  render: (h) => h("div", "bar"),
};

export default Vue.component("Conditional", {
  name: "Conditional",
  functional: true,
  props: {
    ok: Boolean,
  },
  render(h, context) {
    return context.props.ok ? h(bar) : h(foo);
  },
});
