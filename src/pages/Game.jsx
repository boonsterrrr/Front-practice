import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Title = styled.h1`
  font-size: 50px;
`;
const Button = styled.button`
  width: 60px;
  height: 30px;
  position: absolute;

  bottom: 8px;
  right: 8px;

  border: 2px dotted #877d94;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    background-color: #b4b4d6;
  }
  &:active {
    background-color: #9595d3;
  }
`;
const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  position: absolute;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cfcaca;
  gap: 10px;
  border-bottom-color: 3px red;
  border: 3px solid black;
`;
function Game() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Wrapper>
      <Title>게임</Title>
      <Button onClick={handleClick}>Home</Button>
    </Wrapper>
  );
}

export default Game;
