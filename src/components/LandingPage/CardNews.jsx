import React from "react";
import { Link } from "react-router-dom";
import { NewsPageModel } from "../../model/NewsPageModel";
import ImageCard from "../../assets/landingpage/newsImage1.png";

const CardNews = ({ datas }) => {
  return (
    <>
      {datas.map((item) => (
        <div className="w-full ">
          <div className="p-4 mb-5 border flex flex-col border-slate-300 rounded-lg gap-5">
            <div className="flex justify-between items-center gap-5">
              <div className="rounded-lg w-3/6 h-44">
                <img
                  src={item.image}
                  alt="img"
                  className=" object-fill bg-cover h-full  "
                />
              </div>
              <div>
                <h2 className="text-xl  font-bold">{item.title}</h2>
                <p className="text-sm mt-2 text-[#858D9D]">
                  {item.description.slice(0, 200) + "..."}
                </p>
                <div className="flex mt-8 justify-between items-center">
                  <p className="text-sm text-[#858D9D]">Posted 17 June 2023</p>
                  <Link to={`/news/${item.id}`}>
                    <p className="text-sm text-primary">Details</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardNews;
