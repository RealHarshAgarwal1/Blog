import "App.css"


function App() {

  const[posts,setPosts]=useState()


  function makePost(){
    let postObject = {
      title:"Proper",
      description:"dasfd", 
      content:"dasfds",
      author:"adfd",
      dateCreated:new Date()
    }
    createPost(postObject)
  }

      // useEffect(()=>{
      //   async function loadAllPosts(){
      //     let data = await getPosts()
      //     if (data){
      //       setPosts(data)
      //     }
      //   }
      //   loadAllPosts()
      // },[])
      



  return (
    <>
      {JSON.stringify(posts)}

      <button onClick={makePost}>
        Create Object
      </button>
      
    </>
  )
}

export default App
