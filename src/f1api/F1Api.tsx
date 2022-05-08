import { Button } from "@mui/material";
import { VFC, useState } from "react";
import axios from "axios";
import { meta, results } from "../app/types/type";
import TimeBoard from "./TimeBoard";

type RES = {
  meta: meta;
  results: results;
};

const F1Api = () => {
  const [results, setResults] = useState<results>();

  const getFetch = () => {
    axios
      .get<RES>("https://myjson.dit.upm.es/api/bins/37xn")
      .then((res) => {
        console.log(res.data.results);
        setResults(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>archive</h2>
      <Button color="primary" onClick={getFetch}>
        check
      </Button>
      {/* <TimeBoard res={results} /> */}
    </>
  );
};

export default F1Api;
