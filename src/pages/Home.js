import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  orderBy,
  where,
  startAfter,
} from "firebase/firestore";
import BlogSection from "../components/BlogSection";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect (() => {
    const unsub = onSnapshot(
    collection (db, "blogs"),
    (snapshot) => {
    let list = [];
    snapshot.docs.forEach((doc) => {
    list.push({id: doc.id, ...doc.data() });
    });
    setBlogs (list);
    },
    (error) => {
    console.log(error);
    }
    );
    return () => {
    unsub();
    };
    }, []);

  console.log("blogs", blogs);

  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding">
        <div className="row mx-0">
          <h2>Trending</h2>
          <div className="col-md-8">
            <BlogSection blogs={blogs}/>
          </div>
          <div className="col-md-3">
            <h2>Tags</h2>
            <h2>Most Popular</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
