import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/API";

import Layout from "../components/Layout";
import Loader from "../components/Loader";

import { Athlete } from "../models/Feed";

import "../App.css";
import { Avatar } from "@material-ui/core";

const Athletes = () => {
  const { data, error } = useSWR("/athlete", fetcher);

  console.log(data);

  if (!data && !error) return <Loader />;
  if (error) return <h1>Error</h1>;

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Sport</th>
          </tr>
        </thead>
        <tbody>
          {data.map((athlete: Athlete) => (
            <tr key={athlete.id}>
              <td>
                <Avatar src={athlete.avatar} />
              </td>
              <td>
                <Link to={`/athletes/${athlete.id}`}>{athlete.name}</Link>
              </td>
              <td>{athlete.age}</td>
              <td>
                <Avatar src={athlete.country.icon} />
              </td>
              <td>{athlete.sport.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Athletes;
