"use client";
import React, { useState } from "react";
import axios from 'axios'; // npm install axios
import { useRouter } from "next/navigation";

export default function AddUser() {
    const [inputs, setInput] = useState({});
 

    // Xử lý thay đổi input và cập nhật giá trị tương ứng trong state
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }));
    };

    // Xử lý khi form được submit
    const router = useRouter();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Gửi dữ liệu đến API backend
        axios.post('http://localhost:3001/api/adduser', inputs)
            .then(function (response) {
                console.log(response);
                router.push('/'); // Chuyển hướng sau khi thêm người dùng
            })
            .catch(function (error) {
                console.error('Có lỗi xảy ra khi thêm người dùng!', error);
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-70">
            <div className="container">
                <div className="mt-5">
                    <h1 className="mb-4 text-center">Thêm Người Dùng Mới</h1>
                    <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                        <div className="mb-4">
                            <label htmlFor="name" className="form-label">
                                Tên
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Tên..."
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Email..."
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">
                                Mật Khẩu
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Mật khẩu..."
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Nút submit */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                Thêm Người Dùng Mới
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
