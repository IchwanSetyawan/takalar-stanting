import React, { useContext } from "react";
import { TabMenuContext } from "../../context/TabMenuContext";
import Layout from "../../layouts/Layout";

const Dashboard = () => {
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);

  return (
    <>
      <Layout>
        <h1>ini adalah halaman dashboard</h1>
      </Layout>
    </>
  );
};

export default Dashboard;
