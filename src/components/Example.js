export default {
  name: "Example",
  data() {
    return {};
  },
  props: {
    tags: Array,
  },
  render(h) {
    return h("div", { class: "dumb" }, returnDOMNodes(["h1", "h2", "h3"], h));
  },
};

const returnDOMNodes = (nodes, h) => nodes.map((node, index) => h(node, index));
