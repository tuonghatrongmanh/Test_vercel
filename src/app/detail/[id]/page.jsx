"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "next/navigation"
export default function Detail() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetchUser();
    }, [id]);
    const fetchUser = async () => {
        try {
            const result = await axios.get('http://localhost:3001/api/getUser/'+id);
            console.log(result.data[0]);
            setUser(result.data[0])
        } catch (err) {
            console.log("sai lỗi hiển thị chi tiết")
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="text-center mb-4">Bảng Người Dùng</h2>
                        <table className="table table-bordered table-hover text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}