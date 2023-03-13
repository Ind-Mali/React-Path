import React, { useEffect, useState } from "react";
import "../App.css";


const NativeFetch = () => {
  const [users, setUsers] = useState([])

  const [isLoading, setIsLoading] = useState(true)

//   Kullanıcının idsina basıldığı anda silen fonksiyon
  const deleteUser = (id)=>{
    id && setUsers(prev =>{
        return prev.filter(q => q.id !== id)
    })
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(data => setUsers(data))
    .catch((e)=>console.log(e))
    .finally(()=> setIsLoading(false)) 
  }, []);


  return (
        <div className="App">
             
            <table>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
                {
                    isLoading && <div className="App">Loading...</div>
                }
                {
                    users.map((item)=>(
                        
                        <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td><button onClick={()=>deleteUser(item.id)} >delete</button></td>
                    </tr>
                    ))
                }
            </table>
        </div>
    )
};

export default NativeFetch;
