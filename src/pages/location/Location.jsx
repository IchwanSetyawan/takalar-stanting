import React from "react";
import Layout from "../../layouts/Layout";
import TableComponent from "../../components/TableComponent";
import { dataTable } from "../../model/TableComponentModel";
import { useNavigate, useParams } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();
  const dataId = dataTable.map((item, id) => item.id);

  const handleNavigateLink = (id) => {
    navigate(`/location/${id}`);
  };
  return (
    <>
      <Layout>
        <div className="m-8">
          <TableComponent
            data={dataTable}
            handleLink={(id) => handleNavigateLink(id)}
            name="Kecamatan"
          />
        </div>
      </Layout>
    </>
  );
};

export default Location;
