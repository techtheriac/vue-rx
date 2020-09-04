import Vue from "vue";

export default Vue.component("AnchoredHeading", {
  props: {
    level: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  render(h, context) {
    return h("h" + context.props.level, this.$slots.children);
  },
});
