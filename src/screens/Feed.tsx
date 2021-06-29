import React from "react";

import useSWR from "swr";
import { fetcher } from "../config/API";

import { Feed } from "../models/Feed";
import FeedCard from "../components/FeedCard";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

const FeedList: React.FC = () => {
  const { data, error } = useSWR("/feed", fetcher);

  console.log(data);

  if (!data && !error) return <Loader />;
  if (error) return <h1>Error</h1>;
  return (
    <Layout>
      {data.map((feed: Feed, index: number) => (
        <FeedCard key={feed.id} feed={feed} screenOffset={`${index * 100}px`} />
      ))}
    </Layout>
  );
};

export default FeedList;
