import React from 'react';
import { getPost } from '../api';
import { useParams,useNavigate} from 'react-router-dom';
import { useState,useEffect} from 'react';


export default function ReadBlog() {
  //Trying to Debug
  //Still not working

  const [post,setPost]=useState({})


  let params=useParams()
  const navigate=useNavigate;
  let id=params.id

  useEffect(()=> {
    async function loadpost() {
      let data=await getPost(id)
      let date=new Date(data.dateCreated)
      data.dateCreated = date.toString()
      setPost(data)
    }
    loadpost()
  })

  return (
    <div>
      <button onClick={()=> navigate(-1)}>
        Back
      </button>
      <h1>{post.title}</h1>
      <h1>{post.description}</h1>
      <h1>{post.dateCreated?.slice(4,15)}</h1>
      <h1>{post.content}</h1>
    </div>
  );
}
