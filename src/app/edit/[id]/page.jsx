"use client"

import { useParams,useRouter } from "next/navigation"
import axios from "axios";
import React,{useState,useEffect} from "react";
export default function Edit(){

    const {id} = useParams();
    const [inputs, setInput] = useState([]);
    useEffect(()=>{
        getUser();
    },[])
    // B1 phần này để lấy id và bắt những tên phải hiện ra
    function getUser(){
        axios.get(`http://localhost:3001/api/getUser/${id}`)
        .then(function(response){
            setInput(response.data[0])
        })
    }
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values,[name]: value}));
    }

    // B2)  phần này để chình sửa
    const router = useRouter();
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:3001/api/edit/${id}`,inputs)
        .then(function(response){
            console.log(response.data)
            router.push('/')
        })
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-70">
        <div className="container">
            <div className="mt-5">
                <h1 className="mb-4 text-center">Chỉnh sửa người dùng</h1>
                <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                <div className="mb-4">
                        <label htmlFor="name" className="form-label">
                            ID người dùng
                        </label>
                        <input
                            type="text"
                            name="id"
                            id="id"
                            className="form-control"
                            placeholder="ID..."
                            value={inputs.id}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label">
                            Tên Người dùng
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Tên..."
                            value={inputs.name || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                            Email người dùng
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Email..."
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                            Mật Khẩu người dùng
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Mật Khẩu..."
                            value={inputs.password || ''}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Nút submit */}
                    <div className="text-center">
                        <button type="submit" name="update" className="btn btn-primary">
                            Chỉnh Sửa Người Dùng
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    )
}