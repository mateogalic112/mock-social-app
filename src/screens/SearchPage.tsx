import useSWR from "swr";
import { fetcherWithSearch } from "../config/API";

import { Feed } from "../models/Feed";
import FeedCard from "../components/FeedCard";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");

  const { data, error } = useSWR(
    ["/search?athlete", keyword],
    fetcherWithSearch
  );

  if (!data && !error) return <Loader />;
  if (error) return <h1>Error</h1>;
  return (
    <>
      <Header>Search Results for {keyword}</Header>
      <Layout>
        {data.map((feed: Feed, index: number) => (
          <FeedCard
            key={feed.id}
            feed={feed}
            screenOffset={`${index * 100}px`}
          />
        ))}
      </Layout>
    </>
  );
};

export default SearchPage;
