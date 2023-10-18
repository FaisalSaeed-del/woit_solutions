import React from "react";
import Layout from "./Layout";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";

const AdWizard = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <Filter/>
        <div className="">
          <div className="text-white">Hello World</div>
        </div>
      </Layout>
    </div>
  );
};

export default AdWizard;
