import React, { useContext, createContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import CardWilayah from "../../components/CardWilayah";
import babyIcon from "../../assets/icon/baby2-icon.svg";
import childCareIcon from "../../assets/icon/child-care-icon.svg";
import "moment/locale/id";

import formattedNumber from "../../utills/formattedNumber ";
import AsuhComponentList from "../../components/AsuhComponentList";
import axios from "axios";

const DashboardBapakAsuh = () => {
  const [kecamatanList, setKecamatanList] = useState([]);
  const [kelurahanList, setKelurahanList] = useState([]);
  const [kecamatanId, setKecamatanId] = useState("");
  const [kelurahanId, setKelurahanId] = useState("");
  const [datas, setDatas] = useState([]);

  const token = localStorage.getItem("token");
  const getLocalKec = JSON.parse(localStorage.getItem("kc"));
  const getLocalKel = JSON.parse(localStorage.getItem("kl"));

  const fetchDataKecAndKel = async () => {
    if (kecamatanId && kelurahanId) {
      const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/bapak-asuh/${kecamatanId}/${kelurahanId}`;
      const payload = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get(url, payload)
        .then((response) => {
          setDatas(response?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (kecamatanId && kelurahanId) {
      fetchDataKecAndKel();
    }
  }, [kecamatanId, kelurahanId]);

  const fetchOnlyKec = async () => {
    const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/bapak-asuh/${kecamatanId}`;
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, payload)
      .then((response) => {
        setDatas(response?.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    if (kecamatanId) {
      fetchOnlyKec();
    }
  }, [kecamatanId]);

  // get all data
  const fetchDataAll = async () => {
    const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/bapak-asuh`;
    const payload = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, payload)
      .then((response) => {
        setDatas(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDataAll();
  }, []);

  const getLcKecSingleFunc = () => {
    const getLcKecSingle = localStorage.getItem("kc");
    setKecamatanId(getLcKecSingle);
    setKelurahanId("");
  };

  const getLcKelSingleFunc = () => {
    const getLcKelSingle = localStorage.getItem("kl");
    setKelurahanId(getLcKelSingle);
  };

  useEffect(() => {
    getLcKecSingleFunc();
  }, []);

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

    if (getLocalKec !== null) {
      responseData = responseData.filter((val) => val.id === getLocalKec);
    }
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

    if (getLocalKel !== null) {
      responseData = responseData.filter((val) => val.id === getLocalKel);
      getLcKelSingleFunc();
      setKelurahanId(getLocalKec);
    }

    setKelurahanList(responseData);
  };

  const handleKecamatanChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      fetchDataAll();
    }
    setKecamatanId(value);
    resetKelurahan(value);
  };

  const resetKelurahan = (val) => {
    if (kecamatanId !== val) {
    }
    setKelurahanId("");
  };

  const handleKelurahanChange = (event) => {
    const value = event.target.value;
    if (value == "") {
      fetchOnlyKec();
    }
    setKelurahanId(value);
  };

  useEffect(() => {
    fetchDataKec();
    fetchDataKelurahan();
  }, [kecamatanId, kelurahanId]);

  return (
    <>
      <Layout>
        <div className="mt-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold  text-darkHard">Wilayah</h1>
            <div className=" flex justify-center items-center text-dark  gap-4">
              <>
                <select
                  value={kecamatanId}
                  className="w-72"
                  onChange={handleKecamatanChange}
                  disabled={kecamatanId == getLocalKec}
                >
                  {getLocalKec === null ? (
                    <option value="">Kecamatan</option>
                  ) : null}

                  {/* {getLocalKel !== null ? (

                    ):()} */}

                  {kecamatanList.map((kec, idx) => (
                    <option key={idx} value={kec.id}>
                      {kec.kecamatan}
                    </option>
                  ))}
                </select>

                <select
                  value={kelurahanId}
                  className="w-72"
                  onChange={handleKelurahanChange}
                  disabled={
                    !kecamatanId ||
                    kecamatanId === "null" ||
                    kelurahanId == getLocalKel
                  }
                >
                  {getLocalKel === null ? (
                    <option value="">Kelurahan</option>
                  ) : null}
                  {kelurahanList
                    ?.filter((item) => item.id_kecamatan == kecamatanId)
                    .map((kel, idx) => (
                      <option key={idx} value={kel.id}>
                        {kel.desa}
                      </option>
                    ))}
                </select>
              </>
            </div>
          </div>
          <div className="bg-white my-8 px-4 py-2  rounded-lg">
            <div className=" flex justify-between items-center">
              <h2 className="text-xl  text-dark font-bold">
                Ringkasan Per Wilayah
              </h2>
            </div>

            <div className="flex justify-between gap-x-5 my-8">
              <>
                <CardWilayah
                  title="Jumlah Bapak Asuh"
                  total={formattedNumber(datas.jml_bapak_asuh)}
                />
                <CardWilayah
                  title="Jumlah Anak Asuh"
                  total={formattedNumber(datas.jml_anak_asuh)}
                />
                <CardWilayah
                  title="Rata-rata kunjungan"
                  total={formattedNumber(datas.rt_kunjungan)}
                />
              </>
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-4 mt-10">
            <div className="p-6 bg-white h-auto rounded-lg ">
              <div className="flex justify-start items-center gap-6">
                <img src={babyIcon} alt="baby icon" />
                <h2 className="text-xl font-bold text-[#252A35]">
                  Anak Asuh Baduta
                </h2>
              </div>
              <div className="mt-8 border border-[#dddddd] rounded-md ">
                <AsuhComponentList
                  title="Jumlah anak asuh yang tidak ASI"
                  total={
                    datas.jml_anak_yang_tidak_asi
                      ? formattedNumber(datas.jml_anak_yang_tidak_asi)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Rata-rata pertumbuhan panjang dan berat badan Anak"
                  total={
                    datas.rt_pertumbuhan_panjang_berat_anak
                      ? formattedNumber(
                          datas?.rt_pertumbuhan_panjang_berat_anak.toFixed(1)
                        )
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Jumlah yang bertambah panjang badannya"
                  total={
                    datas.jml_baduta_bertambah_panjang_badan
                      ? formattedNumber(
                          datas.jml_baduta_bertambah_panjang_badan
                        )
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Jumlah yang bertambah berat badannya"
                  total={
                    datas.jml_baduta_bertambah_berat_badan
                      ? formattedNumber(datas.jml_baduta_bertambah_berat_badan)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Rata-rata komsumsi protein hewani"
                  total={
                    datas.rt_komsumsi_baduta_protein_hewani
                      ? formattedNumber(
                          datas.rt_komsumsi_baduta_protein_hewani.toFixed(1)
                        )
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Persentase yang mengkomsumsi protein hewani"
                  total={`${
                    datas.persentase_baduta_komsumsi_protein
                      ? formattedNumber(
                          datas.persentase_baduta_komsumsi_protein
                        )
                      : 0
                  }%`}
                />
              </div>
            </div>

            <div className="p-6 bg-white h-auto rounded-lg ">
              <div className="flex justify-start items-center gap-6">
                <img src={childCareIcon} alt="baby icon" />
                <h2 className="text-xl font-bold text-[#252A35]">
                  Anak Asuh Bumil KEK
                </h2>
              </div>
              <div className="mt-8 border border-[#dddddd] rounded-md ">
                <AsuhComponentList
                  title="Jumlah yang mengkonsumsi PMT yang tidak ASI"
                  total={
                    datas.jml_bumil_komsumsi_pmt_tidak_asi
                      ? formattedNumber(datas.jml_bumil_komsumsi_pmt_tidak_asi)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Jumlah yang mengkonsumsi TTD/MMS"
                  total={
                    datas.jml_bumil_komsumsi_ttd_mms
                      ? formattedNumber(datas.jml_bumil_komsumsi_ttd_mms)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Jumlah yang bertambah ukuran LILAnya"
                  total={
                    datas.jml_bumil_yang_bertambah_lila
                      ? formattedNumber(datas.jml_bumil_yang_bertambah_lila)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Rata-rata makan per hari"
                  total={
                    datas.rt_makan_perhari_bumilkek
                      ? formattedNumber(datas.rt_makan_perhari_bumilkek)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Presentase yang mengkonsumsi buah-buahan"
                  total={`${
                    datas.persentase_bumilkek_komsumsi_buah
                      ? formattedNumber(datas.persentase_bumilkek_komsumsi_buah)
                      : 0
                  }%`}
                />

                <AsuhComponentList
                  title="Presentase yang mengkonsumsi protein hewani"
                  total={`${
                    datas.persentase_bumilkek_komsumsi_buah
                      ? formattedNumber(datas.persentase_bumilkek_komsumsi_buah)
                      : 0
                  }%`}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardBapakAsuh;
