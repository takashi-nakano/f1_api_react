import React from "react";
import axios, { AxiosRequestConfig } from "axios";

const TestFech = () => {
  const options: AxiosRequestConfig = {
    method: "GET",
    //url: `https://f1-live-motorsport-data.p.rapidapi.com/races/2021`,
    url: "https://f1-live-motorsport-data.p.rapidapi.com/session/2991",
    //url: "https://f1-live-motorsport-data.p.rapidapi.com/session/2757",
    //url: "https://f1-live-motorsport-data.p.rapidapi.com/session/2757",
    headers: {
      "x-rapidapi-key": "a0d91b664amsh17ea03050f98b00p1f9c3djsnc42267e82e89",
      "x-rapidapi-host": "f1-live-motorsport-data.p.rapidapi.com",
    },
  };
  const testFech = () => {
    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      TestFech
      <button onClick={testFech}>test</button>
    </div>
  );
};

export default TestFech;
