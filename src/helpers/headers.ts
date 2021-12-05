import { BING_KEY, GOOGLE_KEY } from "../utils/constants";

interface IHeaders {
  [key: string]: string;
}

export const getGoogleSearchheaders = (): IHeaders => {
  const items: IHeaders = {
    "x-user-agent": "application/json",
    "x-proxy-location": "US",
    "x-rapidapi-host": "google-search3.p.rapidapi.com",
    "x-rapidapi-key": `${GOOGLE_KEY}`,
  };
  return items;
};

export const getBingSearchHeaders = (): IHeaders => {
  const items: IHeaders = {
    "Ocp-Apim-Subscription-Key": `${BING_KEY}`,
  };
  return items;
};
