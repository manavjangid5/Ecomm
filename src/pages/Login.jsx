import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
  width: 100w;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=2000") center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;

`;
const Button = styled.button`
  width: 40%auto;
  border: none;
  padding: 15px 20px;
  background-color: lightsteelblue;
  cursor: pointer;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>Log In</Button>
                <Link>Forgot Password?</Link>
                <Link>Create New Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
