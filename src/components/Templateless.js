export default {
  name: "Templateless",
  data() {
    return {
      name: "fola",
    };
  },
  methods: {},
  render(h) {
    return h("h1", { class: "header" }, [
      h("span", "smaller Asshole"),
      h("div", { class: "container" }, [
        h("p", {}, "This is just a minor accumulation of text"),
      ]),
    ]);
  },
};
