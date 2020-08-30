import styled from "styled-components";
export const DivListaDeTareas = styled.div`
  .container-task {
    max-width: 400px;
    margin: auto;
    display: grid;
    padding: 0.6em 3em;
    grid-template-columns: 1fr 40px;
    justify-content: center;
    align-items: center;
  }
  .task {
    color: white;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.2em;
    &:hover{
      color: #f9ffaa;
    }
  }
  .task-delete {
    cursor: pointer;
    color: red;
    font-weight: 700;
    text-align: right;
  }
`;
