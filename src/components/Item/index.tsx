import { IGoogleSearchList } from "../../reducers/search.reducer";
import {
  Container,
  LinkContainer,
  TitleContainer,
  DescriptionContainer,
} from "./styles";

/**
 * Item component
 *
 * @returns {JSX.Element}
 */

const Item = (props: IGoogleSearchList): JSX.Element => (
  <Container>
    <LinkContainer>{props.link}</LinkContainer>
    <TitleContainer>
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.title}
      </a>
    </TitleContainer>
    <DescriptionContainer>{props.description}</DescriptionContainer>
  </Container>
);

export default Item;
