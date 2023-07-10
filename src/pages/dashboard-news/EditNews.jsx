import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditNews = () => {
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

  const [selectedImage, setSelectedImage] = useState(null);
  const [defaultImage, setDefaultImage] = useState(null);

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
    keyboard: {
      bindings: {
        handleEnter: {
          key: 13,
          handler: function () {
            return true;
          },
        },
      },
    },
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

  const handleImageChange = async (e) => {
    console.log("imageCHange", e.target.files);
    setDefaultImage(await generateFile(e.target.files[0]));
  };

  useEffect(() => {
    if (watch("gambar")?.length) {
      generateFile(getValues("gambar")[0]).then((res) => {
        setDefaultImage(res);
      });
    }
  }, [watch("gambar")]);

  const editorBody = watch("body");
  const onEditorStateChange = (editorState) => {
    setValue("body", editorState);
  };

  useEffect(() => {
    register("body", { required: true });
  }, [register]);

  const navigate = useNavigate();
  const { id } = useParams();

  const url = `https://stunting.ahadnikah.com/api/admin/dashboard/artikel/${id}/`;
  const currentDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

  const urlToBlob = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          resolve(blob);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const generateFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("category", data.category);
    if (data.gambar[0] === undefined) {
      const toBlob = await urlToBlob(defaultImage);

      const name = defaultImage.substring(defaultImage.lastIndexOf("/") + 1);
      toBlob.lastModifiedDate = new Date();
      toBlob.name = name;
      const myFile = new File([toBlob], name, {
        type: toBlob.type,
      });

      formData.append("gambar", myFile);
    } else {
      formData.append("gambar", data.gambar[0]);
    }

    const token = localStorage.getItem("token");

    axios
      .put(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Berhasil mengedit artikel");
        setTimeout(() => {
          navigate("/dashboard-news");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Gagal mengedit artikel");
      });
  };

  // const imagePriview = watch();

  const fetchData = async () => {
    axios
      .get(url)
      .then((response) => {
        setValue("title", response.data.title);
        setValue("body", response.data.body);
        setValue("category", response.data.category);
        setDefaultImage(response.data.gambar);
        // setValue("created_at", response.data.created_at);
        // setValue("gambar", response.data.gambar);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-8">
          <div>
            <div className="-mt-6">
              <div className="flex justify-start items-center mb-8">
                <h1 className="text-2xl font-bold  text-darkHard">
                  Edit Artikel
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
                <option disabled>- pilih kategori -</option>
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
              <img src={defaultImage} alt="priview" className="h-44 w-44" />
              <input
                type="file"
                name="image"
                accept="image/*"
                // onChange={handleImageChange}
                {...register("gambar")}
              />
              {errors.gambar && (
                <span className="text-red-500 text-xs">
                  {`*${errors.gambar.message}`}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <div className=" flex gap-5">
              <div className="w-[200px]">
                <button className="px-1 w-full py-3 text-white font-semibold bg-red-500 rounded-md mt-7">
                  <Link to="/dashboard-news">Batal</Link>
                </button>
              </div>
              <div className="w-[200px]">
                <button
                  type="submit"
                  className="px-1 w-full py-3 text-white font-semibold bg-primary rounded-md mt-7"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default EditNews;
