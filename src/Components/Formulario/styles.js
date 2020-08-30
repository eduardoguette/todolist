import styled from "styled-components";

export const DivFormulario = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  :root {
    --gradientcolor: linear-gradient(#e66465, #9198e5);
  }
  .form > .wrapper {
    min-width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    border-radius: 7px;
    height: 2.5em;
    width: 180px;
    outline: none;
    border: 2px solid #b6ffe3;
    padding-left: 1em;
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
    position: static;
  }

  input:focus {
    border: 2px solid royalblue;
  }

  button {
    position: relative;
    cursor: pointer;
    background-color: royalblue;
    padding: 0.9em 0.9em;
    border: none;
    outline: none;
    border-radius: 20px;
    color: white;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    margin-left: 1rem;
  }
  button:active {
    padding: 0.89em 0.89em;
    background-color: rgb(43, 89, 230);
  }
  h2 {
    margin: 1em 0;
    color: white;
    font-size: 1em;
    text-align: center;
    font-weight: 400;
  }
  .container-done{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (min-width: 540px) {
    input {
      width: 280px;
    }
  }
`;
