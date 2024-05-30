import {
  NewsApiInstance,
  guardianApiInstance,
  nytApiInstance,
} from "../utils/axiosInstance";

export const fetchArticles = async (filters) => {
  const { keyword, date, category, source } = filters;
  try {
    let newsResponse, guardianResponse, nytResponse;

    switch (source) {
      case "The Guardian":
        guardianResponse = await guardianApiInstance.get("/search", {
          params: { q: buildGuardianQuery(keyword, date, category) },
        });
        break;
      case "The New York Times":
        nytResponse = await nytApiInstance.get("/articlesearch.json", {
          params: {
            q: keyword,
            begin_date: date || "2024-05-28",
            fq: category.toLowerCase(),
          },
        });
        break;
      case "The News":
        newsResponse = await NewsApiInstance.get(
          !category ? "/everything" : "/top-headlines",
          {
            params: {
              q: keyword || "everything",
              from: date,
              category: category.toLowerCase(),
            },
          }
        );
        break;
      default:
        newsResponse = await NewsApiInstance.get(
          !category ? "/everything" : "/top-headlines",
          {
            params: {
              q: keyword || "everything",
              from: date,
              category: category,
            },
          }
        );
        guardianResponse = await guardianApiInstance.get("/search", {
          params: { q: buildGuardianQuery(keyword, date, category) },
        });
        nytResponse = await nytApiInstance.get("/articlesearch.json", {
          params: {
            q: keyword,
            begin_date: date || "2024-05-28",
            fq: category,
          },
        });
    }

    const articles = combineArticles(
      newsResponse,
      guardianResponse,
      nytResponse
    );
    return { articles };
  } catch (err) {
    console.log(err.message);
    return { articles: [] };
  }
};

const buildGuardianQuery = (keyword, date, category) => {
  let guardianQuery = "";
  if (keyword) {
    guardianQuery = keyword.split(" ").join(",");
  }
  if (date) {
    guardianQuery += `&from-date=${date}`;
  }
  if (category) {
    guardianQuery += `&section=${category.toLowerCase()}`;
  }
  return guardianQuery;
};

const combineArticles = (newsData, guardianData, nytData) => {
  const combinedResults = [];

  if (newsData) {
    combinedResults.push(
      ...newsData.data.articles.map((result) => ({
        title: result.title,
        description: result.description,
        url: result.url,
        urlToImage:
          result.urlToImage ||
          "https://answers-afd.microsoft.com/static/images/image-not-found.jpg",
        source: { name: "The News" },
        publishedAt: result.publishedAt,
      }))
    );
  }

  if (guardianData) {
    combinedResults.push(
      ...guardianData.data.response.results.map((result) => ({
        title: result.webTitle,
        description: result.webTitle,
        url: result.webUrl,
        urlToImage:
          result.urlToImage ||
          "https://answers-afd.microsoft.com/static/images/image-not-found.jpg",
        source: { name: "The Guardian" },
        publishedAt: result.webPublicationDate,
      }))
    );
  }

  if (nytData) {
    combinedResults.push(
      ...nytData.data.response.docs.map((doc) => ({
        title: doc.headline.main,
        description: doc.lead_paragraph,
        url: doc.web_url,
        urlToImage:
          doc.multimedia && doc.multimedia.length > 0
            ? `https://static01.nyt.com/${doc.multimedia[0].url}`
            : "https://answers-afd.microsoft.com/static/images/image-not-found.jpg",
        source: { name: "The New York Times" },
        publishedAt: doc.pub_date,
      }))
    );
  }

  return combinedResults;
};
