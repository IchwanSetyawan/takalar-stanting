import React from "react";
import Layout from "../../layouts/LandingPage/Layout";

const TentangKami = () => {
  return (
    <Layout>
      <div className=" flex justify-center h-screen">
        <div className="max-w-[1120px]">
          <div className=" mx-16 my-10 border p-12  border-darkSmooth rounded-lg">
            <h1 className="text-center text-2xl text-primary font-bold">
              Tentang Kami
            </h1>
            <div className="flex flex-col gap-10 mt-10">
              <p>
                “Kolaborasi Stakeholder Takalar : Ayo Atasi Stunting” memiliki
                tujuan untuk mewujudkan lingkungan keluarga yang berdaya secara
                mandiri serta mampu mengupayakan kesehatan pribadi dan ketahanan
                keluarga secara optimal.
              </p>
              <p>
                Dukungan dari seluruh komponen masyarakat bekerja sama dengan
                pemerintah daerah Takalar diharapkan dapat menjadi solusi yang
                komprehensif dan berkelanjutan terhadap permasalahan stunting di
                Takalar.
              </p>
              <p>
                Tentunya program yang dirancang disesuaikan dengan kebutuhan
                yang ditemukan di wilayah ataupun pada keluarga berisiko di
                masyarakat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TentangKami;
