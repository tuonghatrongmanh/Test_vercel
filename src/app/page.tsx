"use client"
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
interface User {
  id: number;
  ten_sp: string;
  gia_sp: string;
  cap_nhat: string;
}
export default function Home() {

  const [users, setUsers] = useState<User[]>([]);
  useEffect(() =>{
    getUsers();
  },[])
  function getUsers(){
   axios.get('https://hieu.name.vn/demo/public/api/sp')
   .then(function(response){
    setUsers(response.data)
   })
  }
  const deleteUser = (id:number) =>{
    axios.delete(`https://hieu.name.vn/demo/public/api/admin/sp/${id}`)
    .then(function(response){
      getUsers();
    })
  }

  return (
    <>
   <div className="container py-3">
   <div className="container mt-5">
    <h2 className="text-center mb-4">User List</h2>
    <div className="container py-3">
    <Link href="/add-user"><button className="btn btn-success btn-sm">Thêm</button></Link>
    </div>
    
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, key)=>
          <tr key={key}>
          <td>{user.id}</td>
          <td>{user.ten_sp}</td>
          <td>{user.gia_sp}</td>
          <td>{user.cap_nhat}</td>
          <td>
           <Link href={`/edit/${user.id}`}> <button className="btn btn-primary btn-sm py-2 mx-2">Sửa</button></Link>
            <button onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm py-2 mx-2">Xóa</button>
            <Link href={`/detail/${user.id}`}><button className="btn btn-success btn-sm py-2 mx-2">Chi tiết</button> </Link>
          </td>
        </tr>
        )}
      
      </tbody>
    </table>
  </div>

   </div>
   </>
  );
}
