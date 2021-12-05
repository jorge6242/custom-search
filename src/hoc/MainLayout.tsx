import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;

interface IProps {
  children: JSX.Element;
}

const MainLayout = (props: IProps) => {
  return <Container>{props.children}</Container>;
};

export default MainLayout;
