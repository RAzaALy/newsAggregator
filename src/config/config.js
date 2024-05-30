export const navs = [
  { nav: "Home", page: "/" },
  { nav: "Preferances", page: "/feed" },
];
export const categories = [
  "Health",
  "Sports",
  "Sciences",
  "Entertainment",
  "Technology",
  "Business",
  "Education",
];
export const sources = ["The News", "The Guardian", "The New York Times"];

export const config = {
  NewsApi: {
    BASE_URL: "https://newsapi.org/v2",
    API_KEY: "2882ee9c3ae345cc88db25e5835a22dd",
  },
  GuardianApi: {
    BASE_URL: "https://content.guardianapis.com",
    API_KEY: "707f7cef-84e5-4f25-9909-63cc7640ad1e",
  },
  NYTApi: {
    BASE_URL: "https://api.nytimes.com/svc/search/v2",
    API_KEY: "0S9uWokWudGQ5gSQGLzteAG0YBC4LDID",
  },
};
