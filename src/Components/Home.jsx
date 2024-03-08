import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://65e943454bb72f0a9c510831.mockapi.io/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 bg-success-subtle">
        {books.map((item, index) => {
          return (
            <>
              <div className="col" key={index}>
                <div className="card h-100">
                  <div className="card-body bg-info-subtle">
                    <h5 className="card-title">Title : {item.name}</h5>
                    <h5 className="card-title">Author : {item.author}</h5>
                    <p className="card-text">Publisher : {item.publisher}</p>
                    <p className="card-text">Published : {item.published}</p>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.pages} Pages</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;