import React from "react";
import Layout from "./../components/Layout/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 mt-5 p-4">

          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 pt-5">
          <h1 className="bg-dark p-2 text-white text-center mt-5">Privacy Policy</h1>
          <p>add privacy policy Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur amet soluta laborum possimus, numquam ipsam quis sapiente molestias iste neque officiis, dolorum reiciendis corrupti saepe beatae aliquid architecto quasi? Unde a sunt hic numquam cumque nulla, vero quis vitae consequatur eveniet cum quia doloremque obcaecati aliquid iusto ad laborum.</p>

        </div>
      </div>
    </Layout>
  );
};

export default Policy;
