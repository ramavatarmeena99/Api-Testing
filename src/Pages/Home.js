import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Home() {
    const [getData, setGetData] = useState([])
const getApi = async()=>{
    await axios
    .get("https://reqres.in/api/users?page=2")

    .then( function(res){
        setGetData(res.data.data)
        console.log(res.data.data)
    })
}
useEffect(() => {
getApi()
});
  return (
    <div style={{width:"100%",height:"100vh",backgroundColor:"red"}}>Home
    {getData?.map((e, index)=>{
        return(
            <>
            <p style={{ width: "100%", height: "20%" }}>{e.id}</p>
            </>
        )
    })}
    </div>
  )
}
