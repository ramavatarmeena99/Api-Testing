import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


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
},[]);
  return (
    <div style={{width:"100%",height:"auto",backgroundColor:"transparent", display:"flex"}}>
    {getData?.map((e, index)=>{
        return(
            <>

            <Card class="card">
  <Img src={e.avatar} alt={e.first_name} />
  <div class="container">
    <h4><b>{e.first_name} {e.last_name}</b></h4>
    <p>{e.email}</p>
  </div>
</Card>

            
            </>
        )
    })}
    </div>
  )
}

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  margin:10px;
    background-color:blue ;
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

  }

`
const Img = styled.img`
border-radius: 5px 5px 0 0;

`
