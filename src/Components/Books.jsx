import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Books = ({setId}) => {
  const [books, setBooks] = useState([])
  const[deleteData,setDeleteData]=useState([])
    const navigate=useNavigate()
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios.get("https://65e943454bb72f0a9c510831.mockapi.io/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => {
        console.log(err);
      });
    };
    const handleEdit = (id) => {
        setId(id)
        navigate(`/edituser/${id}`)
  }
  const handleDelete = async(id) => {
    await axios.delete(`https://65e943454bb72f0a9c510831.mockapi.io/api/books/${id}`)
      .then(res => setDeleteData(res.data))
    .catch((err)=>console.log(err))
  }
    return (
      <div>
        <div className="table-responsive">
          <table className="table align-middle table-success table table-bordered border-primary table-hover">
            <thead>
              <tr >
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Publisher</th>
                <th scope="col">Published</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {books.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.author}</td>
                            <td>{item.publisher}</td>
                            <td>{item.published}</td>
                            <td>{item.description}</td>
                            <td><button onClick={()=>{handleEdit(item.id)}} className='bg-info'>Edit</button></td>
                            <td><button onClick={()=>{handleDelete(item.id)}} className="bg-danger">Delete</button></td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Books;