import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppRootReducer } from "../../reducers";
import {
  getBingSearch,
  getBothSearch,
  getGoogleSearch,
} from "../../reducers/search.reducer";
import Item from "../../components/Item";
import {
  SearchContainer,
  InputContainer,
  ButtonContainer,
  Button,
  ListContainer,
  LoadingContainer,
  Select,
  TitleContainer,
} from "./styles";

/**
 * Main component
 *
 * @returns {JSX.Element}
 */

enum TypeSearch {
  google = 1,
  bing = 2,
  both = 3,
}

type FormData = {
  term: string;
};
const Main = (): JSX.Element => {
  /** States **/
  const [type, setType] = useState<TypeSearch>(1);

  /** Redux **/
  const { list, loading } = useSelector(
    (state: AppRootReducer) => state.searchReducer
  );
  const dispatch = useDispatch();

  /** Form control **/
  const { register, handleSubmit } = useForm<FormData>();

  const getEndpoint = (term: string) => {
    switch (type) {
      case TypeSearch.google:
        return getGoogleSearch(term);
      case TypeSearch.bing:
        return getBingSearch(term);
      case TypeSearch.both:
        return getBothSearch(term);
    }
  };

  const onSubmit = (form: FormData) => dispatch(getEndpoint(form.term));

  const onTypeSearchChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setType(Number(event.currentTarget.value));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TitleContainer>Custom Search</TitleContainer>
        <SearchContainer>
          <div>
            <Select onChange={onTypeSearchChange}>
              <option value={TypeSearch.google}>Google Search</option>
              <option value={TypeSearch.bing}>Bing Search</option>
              <option value={TypeSearch.both}>Both</option>
            </Select>
          </div>
          <InputContainer>
            <input
              placeholder="Type here ..."
              {...register("term", { required: true, maxLength: 20 })}
            />
          </InputContainer>
          <ButtonContainer>
            <Button disabled={loading}>Search</Button>
          </ButtonContainer>
        </SearchContainer>

        {loading ? (
          <LoadingContainer>Loading...</LoadingContainer>
        ) : (
          <ListContainer>
            {list && list.map((e) => <Item {...e} />)}
          </ListContainer>
        )}
      </form>
    </div>
  );
};

export default Main;
