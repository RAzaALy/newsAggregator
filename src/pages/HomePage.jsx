import React, { useState, useEffect } from "react";
import { getArticles } from "../app/features/news/newsSlice";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";
import { getPreferences } from "../utils/localStorage";
import Filters from "../components/Filters";
import Loader from "../components/Loader";

const HomePage = () => {
  const preferences = getPreferences();
  const [filters, setFilters] = useState({
    keyword: "",
    date: "",
    category: preferences?.categories?.[0] || "",
    source: preferences?.sources?.[0] || "",
  });
  const [toggleFilter, setToggleFilter] = useState(false);

  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getArticles(filters));
    };
    fetchData();
  }, [filters, dispatch]);

  const handleSearch = (keyword) => {
    setFilters({ ...filters, keyword });
  };

  const handletoggleFilter = () => {
    setToggleFilter(!toggleFilter);
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        handletoggleFilter={handletoggleFilter}
      />
      <Filters
        filters={filters}
        setFilters={setFilters}
        toggleFilter={toggleFilter}
      />
      {filters.keyword ? (
        <h1 className="text-center mt-8 sm:text-3xl text-4xl font-medium title-font text-gray-900">
          Search Results for {filters.keyword}
        </h1>
      ) : (
        <h1 className="text-center mt-8 sm:text-3xl text-4xl font-medium title-font text-gray-900">
          News Aggregator
        </h1>
      )}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {status !== "loading" ? (
            articles.length !== 0 ? (
              <div className="flex flex-wrap -m-4">
                {articles.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </div>
            ) : (
              <h1 className="text-center text-4xl text ">
                 Data not found for given parameters
              </h1>
            )
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
