import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewsAdd = () => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      // [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // [{ font: [] }],
      // [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      // ["bold", "italic", "underline", "strike", "blockquote"],
      // [
      //   { list: "ordered" },
      //   { list: "bullet" },
      //   { indent: "-1" },
      //   { indent: "+1" },
      // ],

      // ["link", "image", "video"],
      ["link"],
    ],
  };
  return (
    <Layout>
      <div className="m-8">
        <div>
          <div className="-mt-6">
            <div className="flex justify-start items-center mb-8">
              <h1 className="text-2xl font-bold  text-darkHard">
                Form Unggah Artikel
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between gap-2 text-base  ">
            <label className=" font-bold">Judul Artikel</label>
            <input className="px-3 py-4 rounded-lg font-medium border-darkSmooth border focus:outline-none" />
          </div>

          <div className="mt-10">
            <div>
              <label className="font-bold mb-5 ">Isi Artikel</label>
            </div>
            <div className="">
              <ReactQuill
                className=" bg-white"
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                placeholder="input text disini ..."
              />
            </div>
          </div>
          {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
        </div>

        <div className="flex justify-end">
          <div className="w-[100px]">
            <button className="px-1 w-full py-3 text-white font-semibold bg-primary rounded-md mt-7">
              Post
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsAdd;
