import axios from "axios";
import { config } from "../config/config";

const NewsApiInstance = axios.create({
  baseURL: config.NewsApi.BASE_URL,
  headers: {
    "X-Api-Key": config.NewsApi.API_KEY,
  },
});

const guardianApiInstance = axios.create({
  baseURL: config.GuardianApi.BASE_URL,
  params: { "api-key": config.GuardianApi.API_KEY },
});
const nytApiInstance = axios.create({
  baseURL: config.NYTApi.BASE_URL,
  params: { "api-key": config.NYTApi.API_KEY },
});

export { guardianApiInstance, NewsApiInstance, nytApiInstance };
