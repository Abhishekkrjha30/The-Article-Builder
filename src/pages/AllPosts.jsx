/* eslint-disable no-unused-vars */
import { Container, PostCard } from "../components"
import appwriteService from "../appwrite/config"
import { useState,useEffect } from "react"

function AllPosts() {
    const [posts , setPosts ]= useState([])

    useEffect(()=>{},[])

    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
           setPosts(posts.documents)
        }
    })
  return (
    <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post)=>(
                        <div key={post.$id} className="p-2 w-1/4 ml-4 md:ml-2">
                            <PostCard {...post}/>
                        </div>

                    ))}

                </div>
            </Container>
            
        
    </div>
  )
}

export default AllPosts