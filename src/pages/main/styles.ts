import styled from "styled-components";
import { colors } from "../../styles/colors";

export const TitleContainer = styled.div`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 24px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  text-align: center;
  height: 450px;
  overflow: auto;
  margin-top: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const InputContainer = styled.div`
  padding: 5px;
  input {
    padding: 10px;
    &:focus {
      outline-width: 0;
    }
  }
`;

export const ButtonContainer = styled.div`
  padding: 5px;
`;

export const LoadingContainer = styled.div`
  padding: 5px;
  margin-top: 10px;
  font-weight: bold;
`;

export const Select = styled.select`
  padding: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${colors.blue.primary};
  border: 1px solid ${colors.blue.primary};
  border-radius: 5px;
  color: ${colors.white.primary};
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    background-color: ${colors.grey.primary};
    border: 1px solid ${colors.grey.primary};
  }
`;
