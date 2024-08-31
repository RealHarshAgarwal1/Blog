import React from 'react';
import {getPosts} from "../api"
import {useState,useEffect} from "react"
import BlogCard from "../Components/BlogCard"


export default function Home() {

  const [posts,setPosts]=useState([])

  useEffect(()=>{
    async function loadAllPosts(){
      const data=await getPosts()
      data.sort((d1,d2)=>new Date(d2.dateCreated).getTime() - new Date(d1.dateCreated))
      setPosts(data)
    }
    loadAllPosts()
  },[])


  return (
    <div className='posts'>
      <>
      {posts.map((post)=>{
        return(
          <>
          <BlogCard post={post}/>
          </>
        )
      })}
      </>
      </div>  
  );
}
