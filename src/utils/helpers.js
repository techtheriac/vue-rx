import { compose } from "ramda";

const addThree = compose(
  (x) => x + 1,
  (x) => x + 2
);

export default addThree;
