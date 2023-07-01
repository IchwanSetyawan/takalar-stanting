import React from "react";
import Layout from "../../layouts/LandingPage/Layout";
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const RegisterBapakAsuh = () => {
  const [kecamatanList, setKecamatanList] = React.useState([]);
  const [kelurahanList, setKelurahanList] = React.useState([]);
  const [selectedKecamatan, setSelectedKecamatan] = React.useState(null);
  const [selectedKelurahan, setSelectedKelurahan] = React.useState(null);

  const fetchDataKec = async () => {
    const url = "https://stunting.ahadnikah.com/api/wilayah/kecamatan";

    const response = await axios.get(url);

    let responseData = response?.data;
    setKecamatanList(responseData);
  };

  const fetchDataKelurahan = async () => {
    const url = `https://stunting.ahadnikah.com/api/wilayah/desa`;

    const response = await axios.get(url);
    let responseData = response?.data;

    if (selectedKecamatan) {
      console.log("test selected");
      const filteredKelurahan = responseData.filter(
        (item) => item.id_kecamatan === Number(selectedKecamatan)
      );

      return setKelurahanList(filteredKelurahan);
    }
    setKelurahanList(responseData);
  };

  const onChangeKecamatan = (e) => {
    const selectedKecamatanId = e.target.value;
    setSelectedKecamatan(selectedKecamatanId);
    fetchDataKelurahan();
  };
  const onChangeKelurahan = (e) => {
    const selectedKeLurahanId = e.target.value;
    setSelectedKelurahan(selectedKeLurahanId);
  };

  useEffect(() => {
    fetchDataKec();
    fetchDataKelurahan();
  }, [selectedKecamatan]);

  console.log("selectedKecamatan", selectedKecamatan);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    axios
      .post(
        "https://stunting.ahadnikah.com/api/admin/landing-page/form-bapakasuh/",
        data
      )
      .then((response) => {
        // Berhasil mengirim data
        toast.success("Pendaftaran Berhasil!");
        console.log(response.data);
        reset();
      })
      .catch((error) => {
        // Gagal mengirim data
        toast.error("pendaftaran gagal!");
        console.log("errors", errors);

        console.error(error);
      });

    const myCheckboxValue = watch("bersedia");
    console.log(myCheckboxValue);
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-20 my-10 border p-12 border-darkSmooth rounded-lg">
          <h1 className="font-bold text-2xl mb-12 text-primary text-center">
            Form Pendaftaran Bapak Asuh
          </h1>
          <div>
            <p>
              Terima kasih untuk kesediaan Anda menjadi Bapak Asuh Anak
              Stunting.
            </p>
            <br />
            <p className="leading-7">
              Program Gerakan Bapak Asuh Anak Stunting adalah program yang
              digagas untuk melibatkan seluruh pihak di kabupaten Takalar baik
              stakeholder maupun masyarakat yang mampu untuk menjadi donatur
              dalam memberikan bantuan penanganan stunting baik itu bantuan
              materi maupun bantuan asupan gizi bagi anak yang menderita
              stunting.
            </p>
            <br />
            <p>
              Donasi Bapak Asuh Anak Stunting bisa ditransfer melalui rekening
              berikut:
            </p>
            <div className="flex  gap-10 my-4">
              <div className="flex flex-col gap-2">
                <p className="text-primary font-bold text-sm">BSI </p>
                <p className="text-primary font-bold text-sm">Muamalat </p>
                <p className="text-primary font-bold text-sm">BRI </p>
                <p className="text-primary font-bold text-sm">Mandiri </p>
                <p className="text-primary font-bold text-sm">BNI </p>
                <p className="text-primary font-bold text-sm">
                  Sulselbar Syariah
                </p>
                <p className=" font-bold text-sm">Kode Donasi </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className=" font-bold text-sm">159 387 1450 </p>
                <p className=" font-bold text-sm">801 004 8528 </p>
                <p className=" font-bold text-sm">005 001 004 852 303 </p>
                <p className=" font-bold text-sm">152 0022 999 292 </p>
                <p className=" font-bold text-sm">347 888 999 1</p>
                <p className=" font-bold text-sm">5100537778889996</p>
                <p className=" font-bold text-sm"> 77</p>
              </div>
            </div>
            <div>
              <p className=" font-bold text-sm">
                A.n Yayasan Dompet Dhuafa Republika
              </p>
            </div>
            <div className="my-5">
              <p className="leading-7">
                Program Gerakan Bapak Asuh Anak Stunting adalah program yang
                digagas untuk melibatkan seluruh pihak di kabupaten Takalar baik
                stakeholder maupun masyarakat yang mampu untuk menjadi donatur
                dalam memberikan bantuan penanganan stunting baik itu bantuan
                materi maupun bantuan asupan gizi bagi anak yang menderita
                stunting.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-10">
            <div className="w-[735px]">
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama lengkap
                  </label>
                  <input
                    type="text"
                    {...register("nama")}
                    id="text"
                    name="nama"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="input nama lengkap"
                  />
                  {errors.firstName?.type === "required" && (
                    <p role="alert">Name is required</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Alamat
                  </label>
                  <input
                    type="text"
                    {...register("alamat")}
                    id="text"
                    name="alamat"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="desa"
                  />
                </div>
                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kecamatan
                  </label>
                  <select
                    {...register("kecamatan")}
                    name="kecamatan"
                    onChange={(e) => onChangeKecamatan(e)}
                    id="countries"
                    className="bg-gray-50 border py-4 px-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                  >
                    <option valu=""> -Pilih Kecamatan-</option>
                    {kecamatanList.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.kecamatan}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kelurahan
                  </label>

                  <select
                    onChange={(e) => onChangeKelurahan(e)}
                    id="countries"
                    {...register("kelurahan")}
                    name="kelurahan"
                    className="bg-gray-50 border py-4 px-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                  >
                    <option value="">-Pilih Kecamatan-</option>
                    {kelurahanList.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.desa}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    No. Hp/WA
                  </label>
                  <input
                    name="no_hp"
                    type="text"
                    {...register("no_hp")}
                    id="text"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Alamat Email
                  </label>
                  <input
                    {...register("email")}
                    aria-invalid={errors.mail ? "true" : "false"}
                    type="email"
                    id="text"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="contohemail@mail.com"
                  />
                  {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Profesi/Satuan Kerja
                  </label>
                  <input
                    name="profesi"
                    type="text"
                    id="text"
                    {...register("profesi")}
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="Input Profesi/Satuan Kerja"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-10 mt-10">
                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Apakah Anda bersedia untuk menjadi Bapak Asuh Anak Stunting
                    untuk anak-anak di Kab. Takalar, Sulawesi Selatan?
                  </label>

                  <div className="flex flex-row items-center mb-4">
                    <input
                      {...register("bersedia", { defaultValue: false })}
                      id="bersedia1"
                      type="checkbox"
                      value={true}
                      name="ketersediaan"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 ">
                      Ya, Bersedia
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      {...register("bersedia", { defaultValue: false })}
                      type="checkbox"
                      id="bersedia2"
                      value={false}
                      name="ketersediaan"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-2"
                      className="ml-2 text-sm font-medium text-gray-900 "
                    >
                      Tidak
                    </label>
                  </div>
                </div>
                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Komitmen donasi per bulan untuk Anak Stunting di Kab.
                    Takalar
                  </label>

                  <select
                    name="donasi"
                    {...register("donasi")}
                    id="countries"
                    className="bg-gray-50 border py-4 px-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                  >
                    <option value="">- Pilih Jumlah Donasi -</option>
                    <option value="20000">Rp. 20.000</option>
                    <option value="30000">Rp. 30.000</option>
                    <option value="40000">Rp. 40.000</option>
                    <option value="50000">Rp. 50.000</option>
                    <option value="60000">Rp. 60.000</option>
                  </select>
                </div>

                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Dengan ini saya berkomitmen untuk menjadi Bapak Asuh Anak
                    Stunting selama
                  </label>

                  <select
                    id="countries"
                    {...register("jangka_waktu")}
                    name="jangka_waktu"
                    className="bg-gray-50 border py-4 px-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                  >
                    <option value="">- Pilih Jangka Waktu Komitmen -</option>
                    <option value="6 Bulan">6 Bulan</option>
                    <option value="9 Bulan">9 Bulan</option>
                    <option value="12 Bulan">12 Bulan</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mx-20 my-20">
          <button
            type="submit"
            className=" bg-primary text-lg text-white px-6 py-4 rounded-lg"
          >
            Daftar Sebagai Bapak Asuh
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={true} />
    </Layout>
  );
};

export default RegisterBapakAsuh;
