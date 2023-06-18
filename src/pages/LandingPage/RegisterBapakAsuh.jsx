import React from "react";
import Layout from "../../layouts/LandingPage/Layout";
import Form from "../../components/LandingPage/Form";
import SelectComponent from "../../components/LandingPage/SelectComponent";

const RegisterBapakAsuh = () => {
  return (
    <Layout>
      <div className="mx-20 my-10 border p-12 border-darkSmooth rounded-lg">
        <h1 className="font-bold text-2xl mb-12 text-primary text-center">
          Form Pendaftaran Bapak Asuh
        </h1>
        <div>
          <p>
            Terima kasih untuk kesediaan Anda menjadi Bapak Asuh Anak Stunting.
          </p>
          <br />
          <p className="leading-7">
            Program Gerakan Bapak Asuh Anak Stunting adalah program yang digagas
            untuk melibatkan seluruh pihak di kabupaten Takalar baik stakeholder
            maupun masyarakat yang mampu untuk menjadi donatur dalam memberikan
            bantuan penanganan stunting baik itu bantuan materi maupun bantuan
            asupan gizi bagi anak yang menderita stunting.
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
            <div>
              <Form title="Nama Lengkap" placeholder="Input Nama Lengkap" />
              <Form
                title="Alamat"
                placeholder="Desa, Kelurahan, Kecamatan, Kabupaten, Provinsi"
              />
              <Form title="No. HP/WA" placeholder="08xxxxxxxxxx" />
              <Form title="Alamat Email" placeholder="contohemail@mail.com" />
              <Form
                title="Profesi/Satuan Kerja"
                placeholder="Input Profesi/Satuan Kerja"
              />
            </div>
            <div className="flex flex-col gap-10">
              <SelectComponent
                title="Apakah Anda bersedia untuk menjadi Bapak Asuh Anak Stunting untuk anak-anak di Kab. Takalar, Sulawesi Selatan?"
                placeholder="- Pilih Status Ketersediaan -"
              />
              <SelectComponent
                title="Komitmen donasi per bulan untuk Anak Stunting di Kab. Takalar"
                placeholder="- Pilih Jumlah Donasi -"
              />
              <SelectComponent
                title="Dengan ini saya berkomitmen untuk menjadi Bapak Asuh Anak Stunting selama"
                placeholder="- Pilih Jangka Waktu Komitmen -"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-20 my-20">
        <button className=" bg-primary text-lg text-white px-6 py-4 rounded-lg">
          Daftar Sebagai Bapak Asuh
        </button>
      </div>
    </Layout>
  );
};

export default RegisterBapakAsuh;
