import React from "react";
import Layout from "../../layouts/Layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import { BulanModel, TahunModel } from "../../model/BulanModel";
import { toast } from "react-hot-toast";

const FormAnakStunting = () => {
  const [kecamatanList, setKecamatanList] = useState([]);
  const [kelurahanList, setKelurahanList] = useState([]);
  const [kecamatanId, setKecamatanId] = useState("");
  const [kelurahanId, setKelurahanId] = useState("");
  const [datas, setDatas] = useState([]);

  const token = localStorage.getItem("token");
  const getLocalKec = JSON.parse(localStorage.getItem("kc"));
  const getLocalKel = JSON.parse(localStorage.getItem("kl"));

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm();

  const fetchDataKec = async () => {
    const token = localStorage.getItem("token");
    const url = "https://stunting.ahadnikah.com/api/wilayah/kecamatan";

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let responseData = response?.data;
    const getLocalKec = JSON.parse(localStorage.getItem("kc"));
    setKecamatanList(responseData);
  };

  const fetchDataKelurahan = async () => {
    const token = localStorage.getItem("token");
    const url = `https://stunting.ahadnikah.com/api/wilayah/desa`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let responseData = response?.data;
    const getLocalKel = JSON.parse(localStorage.getItem("kl"));

    setKelurahanList(responseData);
  };

  useEffect(() => {
    fetchDataKec();
    fetchDataKelurahan();
  }, [kecamatanId, kelurahanId, watch().kecamatan, watch().kelurahan]);

  console.log(
    "kecamatanId",
    watch().kecamatan,

    "kelurahanId",
    watch().desa_kelurahan
  );

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("jumlah_balita_diukur", data.jumlah_balita_diukur);
    formData.append(
      "jumlah_pendek_sangat_pendek",
      data.jumlah_pendek_sangat_pendek
    );
    formData.append("bulan", data.bulan);
    formData.append("tahun", data.tahun);
    formData.append("kecamatan", data.kecamatan);
    formData.append("desa_kelurahan", data.desa_kelurahan);

    const token = localStorage.getItem("token");
    axios
      .post(
        "https://stunting.ahadnikah.com/api/admin/dashboard/form/anak-stunting/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("data berhasil ditambahkan");
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
                  Form Anak Stunting
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-between gap-2 text-base  ">
              <label className=" font-bold">Jumlah Balita Diukur*</label>
              <input
                type="number"
                {...register("jumlah_balita_diukur", {
                  required: "Form Wajib diisi!",
                })}
                className="px-3 py-4 rounded-lg font-medium border-darkSmooth border focus:outline-none"
              />
              {errors.jumlah_balita_diukur && (
                <span className="text-red-500 text-xs">
                  {`*${errors.jumlah_balita_diukur.message}`}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 text-base mt-10 ">
              <label className=" font-bold">
                Jumlah Balita Pendek dan Sangat Pendek*
              </label>
              <input
                type="number"
                {...register("jumlah_pendek_sangat_pendek", {
                  required: "Form wajib diisi!",
                })}
                className="px-3 py-4 rounded-lg font-medium border-darkSmooth border focus:outline-none"
              />
              {errors.jumlah_pendek_sangat_pendek && (
                <span className="text-red-500 text-xs">
                  {`*${errors.jumlah_pendek_sangat_pendek.message}`}
                </span>
              )}
            </div>
            <div className="flex justify-start items-center gap-10">
              <div className="flex flex-col mt-10">
                <label className="font-bold mb-5 ">Bulan*</label>
                <select
                  {...register("bulan", {
                    required: "bulan tidak boleh kosong!",
                  })}
                  className="px-3 w-56 py-2 rounded-lg font-medium border-darkSmooth border text-sm "
                >
                  <option value="">- pilih bulan -</option>
                  {BulanModel.map((item, idx) => (
                    <option value={item.bulan} key={idx}>
                      {item.bulan}
                    </option>
                  ))}
                </select>
                {errors.bulan && (
                  <span className="text-red-500 text-xs">
                    {`*${errors.bulan.message}`}
                  </span>
                )}
              </div>

              <div className="flex flex-col mt-10">
                <label className="font-bold mb-5 ">Tahun*</label>
                <select
                  {...register("tahun", {
                    required: "tahun tidak boleh kosong!",
                  })}
                  className="px-3 w-56 py-2 rounded-lg font-medium border-darkSmooth border text-sm "
                >
                  <option value="">- pilih tahun -</option>

                  {TahunModel.map((item, idx) => (
                    <option value={item.tahun} key={idx}>
                      {item.tahun}
                    </option>
                  ))}
                </select>
                {errors.tahun && (
                  <span className="text-red-500 text-xs">
                    {`*${errors.tahun.message}`}
                  </span>
                )}
              </div>
            </div>
            <div className=" flex justify-start items-center gap-10">
              <div className="flex flex-col mt-10">
                <label className="font-bold mb-5 ">Kecamatan*</label>
                <select
                  {...register("kecamatan", {
                    required: "kecamatan tidak boleh kosong!",
                  })}
                  className="px-3 w-56 py-2 rounded-lg font-medium border-darkSmooth border text-sm "
                >
                  <option value="">- pilih kecamatan -</option>
                  {kecamatanList.map((kec, idx) => (
                    <option key={idx} value={kec.id}>
                      {kec.kecamatan}
                    </option>
                  ))}
                </select>
                {errors.kecamatan && (
                  <span className="text-red-500 text-xs">
                    {`*${errors.kecamatan.message}`}
                  </span>
                )}
              </div>
              <div className="flex flex-col mt-10">
                <label className="font-bold mb-5 ">Kelurahan*</label>
                <select
                  {...register("desa_kelurahan", {
                    required: "Kelurahan tidak boleh kosong !",
                  })}
                  disabled={!watch().kecamatan || watch().kecamatan === ""}
                  className="px-3 w-56 py-2 rounded-lg font-medium border-darkSmooth border text-sm "
                >
                  <option value="">- pilih kelurahan -</option>

                  {kelurahanList
                    ?.filter((kel) => kel.id_kecamatan == watch().kecamatan)
                    .map((item, idx) => (
                      <option key={idx} value={item.id}>
                        {item.desa}
                      </option>
                    ))}
                </select>
                {errors.desa_kelurahan && (
                  <span className="text-red-500 text-xs">
                    {`*${errors.desa_kelurahan.message}`}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-[100px]">
              <button
                type="submit"
                className="px-1 w-full py-3 text-white font-semibold bg-primary rounded-md mt-7"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default FormAnakStunting;
