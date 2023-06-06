import React from "react";
import Layout from "../../layouts/Layout";
import CardIntervensi from "../../components/CardIntervensi";

const Recommendation = () => {
  return (
    <>
      <Layout>
        <div className="m-8">
          <CardIntervensi />
        </div>
      </Layout>
    </>
  );
};

export default Recommendation;
