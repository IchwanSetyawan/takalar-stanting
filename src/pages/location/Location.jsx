import React from "react";
import Layout from "../../layouts/Layout";
import TableComponent from "../../components/TableComponent";

const Location = () => {
  return (
    <>
      <Layout>
        <div className="p-4">
          <TableComponent name="Kecamatan" />
        </div>
      </Layout>
    </>
  );
};

export default Location;
