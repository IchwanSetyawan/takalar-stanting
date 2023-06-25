import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import CardIntervensi from "../../components/CardIntervensi";
import axios from "axios";

const Recommendation = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecommendation = () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const url = `https://stunting.ahadnikah.com/api/admin/dashboard/cakupan/prevalensi`;
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, payload)
      .then((response) => {
        setIsLoading(false);
        setDatas(response?.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getRecommendation();
  }, []);
  return (
    <>
      <Layout>
        <div className="m-8">
          <CardIntervensi datas={datas} loading={isLoading} />
        </div>
      </Layout>
    </>
  );
};

export default Recommendation;
