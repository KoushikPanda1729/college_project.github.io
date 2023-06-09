import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout/Layout";
import useCategory from "../hooks/useCategory";



const Categories = () => {
    const categories = useCategory();
    return (
        <Layout title={"All Categories"}>

            <div className="container " style={{ marginTop: "0px" }}>
                <div className="row container">
                    {categories.map((c) => (
                        <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                            <img
                                src="/images/cat.jpg"
                                className="banner-img"
                                alt="bannerimage"
                                width={"100%"}
                                height={"300vh"}
                            />
                            <div className="card bg-warning">
                                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                                    {c.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Categories;
