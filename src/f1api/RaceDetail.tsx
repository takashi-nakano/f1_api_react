import React from "react";

interface PROPS {
  title: string;
  status: string;
}

const RaceDetail = (props: PROPS) => {
  return (
    <>
      <h2>Race:{props.title}</h2>
      <h2>Race:{props.status}</h2>
    </>
  );
};

export default RaceDetail;
