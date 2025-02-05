import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = styled.input`
  font-size: 15px;
  width: 263px;
  height: 30px;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #bdbfe66d;
  border: 2px solid gray;
  border-radius: 10px;
  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const Button = styled.button`
  width: 270px;
  height: 40px;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  border: 2px solid #4040f0c0;
  background-color: #4040f039;
  border-radius: 5px;
  margin-top: 8px;
  &:hover {
    cursor: pointer;
    background-color: #4040f0c0;
  }
  &:active {
    background-color: #4347c3;
  }
`;

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(pw);
    navigate("/");
  };

  return (
    <Wrapper>
      <form onSubmit={handleClick}>
        <Input
          type="text"
          placeholder="  아이디를 입력해주세요."
          key="<3"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></Input>
        <Input
          type="text"
          placeholder="  Password를 입력해주세요."
          key="??"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
        ></Input>

        <Button onClick={handleClick}> 로그인 </Button>
      </form>
    </Wrapper>
  );
}

export default Login;
