import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewsAdd = () => {
  const [datas, setDatas] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm();

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

  const getCategory = () => {
    const token = localStorage.getItem("token");

    const url =
      "https://stunting.ahadnikah.com/api/admin/dashboard/artikel/category";
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, payload)
      .then((res) => {
        setDatas(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const editorBody = watch("body");

  const onEditorStateChange = (editorState) => {
    setValue("body", editorState);
  };

  useEffect(() => {
    register("body", { required: true });
  }, [register]);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const currentDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("gambar", data.gambar[0]);
    formData.append("created_at", data.currentDate);
    formData.append("category", data.category);

    console.log("formData", formData);

    const token = localStorage.getItem("token");
    axios
      .post(
        "https://stunting.ahadnikah.com/api/admin/dashboard/artikel/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Artikel berhasil ditambahkan");
        setTimeout(() => {
          navigate("/dashboard-news");
        }, 2000);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <label className=" font-bold">Judul Artikel*</label>
              <input
                {...register("title", { required: "judul artikel diperlukan" })}
                className="px-3 py-4 rounded-lg font-medium border-darkSmooth border focus:outline-none"
              />
              {errors.title && (
                <span className="text-red-500 text-xs">
                  {`*${errors.title.message}`}
                </span>
              )}
            </div>

            <div className="mt-10">
              <div>
                <label className="font-bold mb-5 ">Isi Artikel*</label>
              </div>
              <div className="">
                <ReactQuill
                  className=" bg-white"
                  theme="snow"
                  value={editorBody}
                  id="body"
                  name="body"
                  onChange={onEditorStateChange}
                  modules={modules}
                  placeholder="input text disini ..."
                />
              </div>
              {errors.body && (
                <span className="text-red-500 text-xs">
                  {errors.body.message}
                </span>
              )}
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}

            <div className="flex flex-col mt-10">
              <label className="font-bold mb-5 ">Kategori berita*</label>
              <select
                {...register("category", { required: "kategori diperlukan" })}
                className="px-3 w-56 py-2 rounded-lg font-medium border-darkSmooth border text-sm "
              >
                <option value="">- pilih kategori -</option>
                {datas?.results?.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="text-red-500 text-xs">
                  {`*${errors.category.message}`}
                </span>
              )}
            </div>

            <div className="mt-10 flex flex-col">
              <label className=" font-bold">Pilih gambar*</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                {...register("gambar", { required: "File gambar diperlukan" })}
              />
              {errors.gambar && (
                <span className="text-red-500 text-xs">
                  {`*${errors.gambar.message}`}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-[100px]">
              <button
                type="submit"
                className="px-1 w-full py-3 text-white font-semibold bg-primary rounded-md mt-7"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default NewsAdd;
