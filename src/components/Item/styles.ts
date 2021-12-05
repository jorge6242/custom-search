import { colors } from "./../../styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 10px;
  width: 70%;
`;

export const LinkContainer = styled.div`
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 5px;
  color: ${colors.black.primary};
  font-size: 13px;
`;

export const TitleContainer = styled.div`
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 5px;
  font-weight: bold;
  font-size: 18px;
  a {
    color: ${colors.blue.primary};
    text-decoration: none;
    font-size: 18px;
  }
`;

export const DescriptionContainer = styled.div`
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 5px;
  color: ${colors.grey.secondary};
  font-size: 14px;
`;
