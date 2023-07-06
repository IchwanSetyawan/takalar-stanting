import React from "react";
import Layout from "../../layouts/LandingPage/Layout";
import {
  Link,
  unstable_HistoryRouter,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import formatDate from "../../utills/formattedDate";

const NewsPageDetail = () => {
  const { id } = useParams();

  const [datas, setDatas] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const fetchData = () => {
    const url = `https://stunting.ahadnikah.com/api/admin/dashboard/artikel`;
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setDatas(response?.data?.results);
        setIsLoading(false);
        console.log(response?.data.results);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const data = datas.find((val) => val.id == id);

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back by a relative value of -1
  };

  const hitView = () => {
    const url = `https://stunting.ahadnikah.com/api/admin/dashboard/artikel/${id}/hit/`;
    setIsLoading(true);
    axios
      .post(url)
      .then((response) => {
        console.log(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    hitView();
  }, []);

  return (
    <Layout>
      <div className="flex justify-center my-10 ">
        <div className="w-[900px]">
          <button onClick={goBack}>
            <div className="mb-10">
              <button className="font-bold text-xl text-primary text-start ">
                {`< Kembali`}
              </button>
            </div>
          </button>

          {loading ? (
            <p className="text-center">Loading ...</p>
          ) : (
            <>
              <div>
                <h1 className="font-bold text-3xl text-start mb-2">
                  {data?.title}
                </h1>
                <div className="flex justify-between items-center">
                  <p className="text-[#858D9D] text-sm mt-4 mb-10">
                    {`Diposting pada  ${formatDate(data?.created_at)}`}
                  </p>
                  <p className="text-[#858D9D] text-sm mt-4 mb-10">
                    {`Dilihat  ${data?.views} kali`}
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <img
                  src={data?.gambar}
                  alt="photo news"
                  className="rounded-lg w-full h-[600px] object-fill"
                />
              </div>

              <div className="my-20">
                <p className="indent-10 text-xl text-justify">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.body,
                    }}
                  />
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPageDetail;
