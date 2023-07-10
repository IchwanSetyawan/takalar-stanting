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
    watch,
  } = useForm();

  console.log("errors ini", errors);
  const selectedValueDonasi = watch("donasi");

  const onSubmit = (data) => {
    console.log("data", data);
    axios
      .post("https://stunting.ahadnikah.com/api/admin//form-bapakasuh/", data)
      .then((response) => {
        // Berhasil mengirim data
        toast.success("Pendaftaran Berhasil!");
        console.log(response.data);

        reset();
      })
      .catch((error) => {
        // Gagal mengirim data
        toast.error("pendaftaran gagal!");
        console.error(error);
      });
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
                    {...register("nama", { required: true })}
                    id="text"
                    name="nama"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="input nama lengkap"
                  />
                  {errors.nama && (
                    <p className="text-xs text-red-500 mt-2">
                      * nama harus di isi!
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Alamat
                  </label>
                  <input
                    type="text"
                    {...register("alamat", { required: true })}
                    id="text"
                    name="alamat"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="alamat"
                  />
                  {errors.alamat && (
                    <p className="text-xs text-red-500 mt-2">
                      * alamat harus di isi!
                    </p>
                  )}
                </div>
                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kecamatan
                  </label>
                  <select
                    {...register("kecamatan", { required: true })}
                    name="kecamatan"
                    onChange={(e) => onChangeKecamatan(e)}
                    id="countries"
                    className="bg-gray-50 border py-4 px-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                  >
                    <option value=""> -Pilih Kecamatan-</option>
                    {kecamatanList.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.kecamatan}
                      </option>
                    ))}
                  </select>
                  {errors.kecamatan && selectedKecamatan === "" && (
                    <p className="text-xs text-red-500 mt-2">
                      * kecamatan harus di isi!
                    </p>
                  )}
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
                    {...register("kelurahan", { required: true })}
                    name="kelurahan"
                    disabled={!selectedKecamatan}
                    className="bg-gray-50 border py-4 px-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                  >
                    <option value="">-Pilih Kelurahan-</option>
                    {kelurahanList.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.desa}
                      </option>
                    ))}
                  </select>
                  {errors.kelurahan && (
                    <p className="text-xs text-red-500 mt-2">
                      * kelurahan harus di isi!
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    No. Hp/WA
                  </label>
                  <input
                    name="no_hp"
                    type="text"
                    {...register("no_hp", { required: true })}
                    id="text"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="08xxxxxxxxxx"
                  />
                  {errors.no_hp && (
                    <p className="text-xs text-red-500 mt-2">
                      * nomor hp harus di isi!
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Alamat Email
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: "Email tidak valid",
                      },
                    })}
                    // aria-invalid={errors.mail ? "true" : "false"}
                    type="email"
                    id="text"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="contohemail@mail.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-2">
                      * email harus di isi !
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Profesi/Satuan Kerja
                  </label>
                  <input
                    name="profesi"
                    type="text"
                    id="text"
                    {...register("profesi", { required: true })}
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="Input Profesi/Satuan Kerja"
                  />
                  {errors.profesi && (
                    <p className="text-xs text-red-500 mt-2">
                      * profesi harus di isi!
                    </p>
                  )}
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
                      {...register("ketersediaan")}
                      id="bersedia"
                      type="checkbox"
                      name="ketersediaan"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 ">
                      Ya, Bersedia
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Komitmen donasi per bulan untuk Anak Stunting di Kab.
                    Takalar
                  </label>
                  <span className="absolute  text-gray-900 font-medium mt-10 inset-y-0 left-0 pl-5 flex items-cente">
                    Rp.
                  </span>
                  <input
                    name="donasi"
                    type="text"
                    id="number"
                    {...register("donasi", {
                      required: "Donasi harus diisi!",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Masukkan hanya angka",
                      },
                    })}
                    className="w-full pl-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-4 px-6 "
                    placeholder="input jumlah donasi minimal Rp. 20.000"
                  />

                  {errors.donasi && (
                    <p className="text-xs text-red-500 mt-2">
                      * {errors.donasi.message}
                    </p>
                  )}
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
                    id="waktu"
                    {...register("jangka_waktu", { required: true })}
                    name="jangka_waktu"
                    className="bg-gray-50 border py-4 px-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                  >
                    <option value="">- Pilih Jangka Waktu Komitmen -</option>
                    <option value="6 Bulan">6 Bulan</option>
                    <option value="9 Bulan">9 Bulan</option>
                    <option value="12 Bulan">12 Bulan</option>
                  </select>
                  {errors.jangka_waktu && (
                    <p className="text-xs text-red-500 mt-2">
                      * jangka waktu harus di isi!
                    </p>
                  )}
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
