import styled from "vue-styled-components";

const buttonProps = {
  color: String,
};

const smallButton = styled("button", buttonProps)`
  color: ${(props) => props.color};
  padding: 7px;
  background-color: green;
`;
export default smallButton;
