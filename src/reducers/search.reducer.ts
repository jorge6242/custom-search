import axios from "axios";
import {
  getBingSearchHeaders,
  getGoogleSearchheaders,
} from "../helpers/headers";
import { IDispatch } from "../interfaces/IDispatch";
import { BING_URL, GOOGLE_URL } from "../utils/constants";

const GET_SEARCH = "search/get_search";
const GET_BING_SEARCH = "search/get_bing_search";
const SET_LOADING = "search/set_loading";

interface GetGoogleSearch {
  type: typeof GET_SEARCH;
  payload: IGoogleSearchList[];
}
interface GetBingSearch {
  type: typeof GET_BING_SEARCH;
  payload: IBingSearchList[];
}

interface SetLoading {
  type: typeof SET_LOADING;
  payload: boolean;
}

type ActionTypes = GetGoogleSearch | GetBingSearch | SetLoading;

export interface IGoogleSearchList {
  description: string;
  link: string;
  title: string;
}

export interface IBingSearchList {
  name: string;
  url: string;
  snippet: string;
}

interface GoogleSearchResponse {
  answers: Array<number | string>;
  device_region: string;
  device_type: string;
  image_results: Array<number | string>;
  results: IGoogleSearchList[];
}

interface BingSearchResponse {
  webPages: {
    value: IBingSearchList[];
  };
}

export type IState = {
  list: IGoogleSearchList[];
  loading: boolean;
};

const initialState: IState = {
  list: [],
  loading: false,
};

export const getGoogleSearch =
  (term: string, num: number = 100) =>
  async (dispatch: IDispatch<ActionTypes>) => {
    dispatch({
      type: GET_SEARCH,
      payload: [],
    });
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    try {
      const { data } = await axios.get(`${GOOGLE_URL}/q=${term}&num=${num}`, {
        headers: getGoogleSearchheaders(),
      });
      const response: GoogleSearchResponse = data;
      dispatch({
        type: GET_SEARCH,
        payload: response.results,
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };

export const getBingSearch =
  (term: string) => async (dispatch: IDispatch<ActionTypes>) => {
    dispatch({
      type: GET_SEARCH,
      payload: [],
    });
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    try {
      const { data } = await axios.get(`${BING_URL}/search?q=${term}`, {
        headers: getBingSearchHeaders(),
      });
      const response: BingSearchResponse = data;
      const newList = response.webPages.value.map((e) => ({
        title: e.name,
        link: e.url,
        description: e.snippet,
      }));

      dispatch({
        type: GET_SEARCH,
        payload: newList,
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };

export const getBothSearch =
  (term: string, num: number = 100) =>
  async (dispatch: IDispatch<ActionTypes>) => {
    dispatch({
      type: GET_SEARCH,
      payload: [],
    });
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    try {
      const googleRes = await axios.get(`${GOOGLE_URL}/q=${term}&num=${num}`, {
        headers: getGoogleSearchheaders(),
      });

      const bingRes = await axios.get(`${BING_URL}/search?q=${term}`, {
        headers: getBingSearchHeaders(),
      });
      const googleData: GoogleSearchResponse = googleRes.data;
      const bingData: BingSearchResponse = bingRes.data;

      const newBingList = bingData.webPages.value.map((e) => ({
        title: e.name,
        link: e.url,
        description: e.snippet,
      }));

      const list = [...googleData.results, ...newBingList];

      dispatch({
        type: GET_SEARCH,
        payload: list,
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };

const searchReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        list: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
