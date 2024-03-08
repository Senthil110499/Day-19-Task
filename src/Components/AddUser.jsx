import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddUser = () => {
    const navigate=useNavigate()
    const [createData, setCreateData] = useState({
        id: '',
        name: '',
        author: '',
        publisher: '',
        published:'',
        description: '',
        website:''
    })

    const validationSchema = Yup.object().shape({
        id: Yup.string().required('Id is required'),
        name: Yup.string().required('Name is required'),
        author: Yup.string().required('Author is required'),
        publisher: Yup.string().required('Publisher is required'),
        published:Yup.string().required('Published is required'),
        description: Yup.string().required('Description is required'),
        website:Yup.string().required('Website is required'),
    })

    const formik = useFormik({
        initialValues: {createData},
        validationSchema,
        onSubmit: async (values) => {
            await axios.post('https://65e943454bb72f0a9c510831.mockapi.io/api/books', values)
        .catch((err)=>console.log(err))
        navigate('/books')
        }
    })

    return (
        <div>
            <div className="card w-50 bg-primary-subtle" >
            <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
                        <div><label>id : <input type='text' name='id' value={formik.values.id} onChange={formik.handleChange} /></label></div><br />
                        <div className="text-danger">{formik.errors.id}</div>
                        
                        <div><label>name : <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} /></label></div><br />
                        <div className="text-danger">{formik.errors.name}</div>
                        
                        <div><label>author : <input type='text' name='author' value={formik.values.author} onChange={formik.handleChange} /></label></div><br />
                        <div className="text-danger">{formik.errors.author}</div>
                        
                        <div><label>publisher : <input type='text' name='publisher' value={formik.values.publisher} onChange={formik.handleChange} /></label></div><br />
                        <div className="text-danger">{formik.errors.publisher}</div>
                        
                        <div><label>published : <input type='text' name='published' value={formik.values.published} onChange={formik.handleChange} /></label></div><br />
                        <div className="text-danger">{formik.errors.published}</div>
                        
                        <div><label>description : <input type='text' name='description' value={formik.values.description} onChange={formik.handleChange} /></label></div><br />
                        <div className="text-danger">{formik.errors.description}</div>
                        
                        <div><label>website : <input type='text' name='website' value={formik.values.website} onChange={formik.handleChange} /></label></div><br />
                        <div className="text-danger">{formik.errors.website}</div>
                        
                <button type='submit' className='bg-success'>Add Book</button>
            </form>
            </div>
            </div>
        </div>
    );
};

export default AddUser;