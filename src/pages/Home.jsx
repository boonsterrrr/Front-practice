import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Title = styled.h1`
  font-size: 50px;
`;
const Button = styled.button`
  width: 60px;
  height: 30px;
  position: absolute;
  bottom: 15px;
  justify-content: center;
  align-items: center;
  border: 2px solid pink;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #efb4b2;
  }
  &:active {
    background-color: #a27575;
  }
`;
const Wrapper = styled.div`
  width: 300px;
  height: 150px;
  gap: 0px;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #bfc2e8;

  border: 4px solid black;
  border-radius: 150px;
`;

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/game");
  };

  return (
    <Wrapper>
      <Title>Home</Title>
      <Button onClick={handleClick}>Game</Button>
    </Wrapper>
  );
}

export default Home;
