import styled from "styled-components";
import mobileBg from "../../images/bg-shorten-mobile.svg";
import desktopBg from "../../images/bg-shorten-desktop.svg";

const APIForm = styled.form`
  margin-top: 6rem;
  background-color: var(--color-primary-dark);
  background-image: url(${mobileBg});
  background-position: right top;
  background-size: fill;
  padding: 2em;
  background-repeat: no-repeat;
  align-items: center;
  border-radius: 6px;

  & input {
    background-color: var(--color-white);
    padding: 1em;
    width: 100%;
    font-size: var(--fs-500);
    &::placeholder {
      color: var(--color-gray-violet);
    }
  }

  & button {
    width: 100%;
    border-radius: 6px;
    aspect-ratio: 7;
  }

  @media screen and (min-width: 850px) {
    flex-direction: row;
    align-items: stretch;
    background-image: url(${desktopBg});

    & input {
      flex-grow: 1;
    }
    & button {
      width: 30%;
      /* aspect-ratio: 3; */
    }
  }
`;

export default APIForm;
