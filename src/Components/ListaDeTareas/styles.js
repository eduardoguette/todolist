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
    font-weight: 500;
    cursor: pointer;
    font-size: 1.2em;
    text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
    text-decoration-color: red;
    &:hover {
      color: #f9ffaa;
    }
  }
  small {
    color: white;
    font-weight: 700;
    font-size: .7em;
    color: #B35AEC;
  }
  .task-delete {
    cursor: pointer;
    color: red;
    font-weight: 700;
    text-align: right;
  }
`;
