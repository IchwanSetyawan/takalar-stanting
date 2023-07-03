import React from "react";
import { Link } from "react-router-dom";
import { NewsPageModel } from "../../model/NewsPageModel";
import ImageCard from "../../assets/landingpage/newsImage1.png";
import formatDate from "../../utills/formattedDate";

const CardNews = ({ gambar, title, body, id, created_at }) => {
  return (
    <>
      <div className="w-full ">
        <Link to={`/news/${id}`}>
          <div className="p-4 mb-5 border flex flex-col border-slate-300 hover:bg-slate-50 rounded-lg gap-5  transition duration-300">
            <div className="flex justify-start items-center gap-5">
              <div className="rounded-lg w-2/6 h-44">
                <img
                  src={gambar}
                  alt="img"
                  className="object-fill w-full h-full  "
                />
              </div>
              <div className="w-full">
                <div>
                  <h2 className="text-xl  font-bold">{title}</h2>
                  <p className="text-sm mt-2 text-[#858D9D]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: body.slice(0, 200) + "...",
                      }}
                    />
                  </p>
                </div>
                <div className="flex mt-8 justify-between items-center">
                  <p className="text-sm text-[#858D9D]">
                    {formatDate(created_at)}
                  </p>
                  <Link to={`/news/${id}`}>
                    <p className="text-sm text-primary">Details</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardNews;
