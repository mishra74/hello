import React, { useEffect, useState } from 'react'
import "./headlines.css"
import IndiaGate from "../../image/headlines/IndiaGate.jpg"
import Hawa from "../../image/headlines/hawa.jpg"
import Rath from  "../../image/headlines/rath.jpg";
import Priest from "../../image/headlines/priest.jpg"
import Taj from "../../image/headlines/taj.jpg"
import Covid from "../../image/headlines/covid.webp"
import Unity from "../../image/headlines/unity.jfif"
import Farmer from "../../image/headlines/farmer.webp";
import axios from "axios";



export default function Headlines() {

        const [Get_data, setPosts] = useState([]);
        useEffect(() =>{
          
          const fetchPosts = async () =>{
            const res = await axios.get('http://localhost:5000/api/headline-one')
       setPosts(res.data)
          }
          fetchPosts();
          console.log("abcdg")
      
        },[])
        const [Getdata, setPost] = useState([]);
        useEffect(() =>{
          
          const fetchPosts = async () =>{
            const res = await axios.get("http://localhost:5000/api/headline")
       setPost(res.data)
          }
          fetchPosts();
          console.log("abcdg")
      
        },[])
        return (

        <>
        <div className="d-flex justify-content-around mt-4">
        <div className="headlines">
        <h3 className="divider">Headlines</h3>
        <hr class="border-2 border-top border-secondary border"></hr>
        <ol>
        <li>
        {Getdata.map((getdata)=>{
              if(getdata.categories=="Current"){
        return (  
          <>
        <a href="/"></a>
        <p className="mt-1">{getdata.headline}
        </p>
        </> )}})}
          
    
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li>
        <li>
        {Getdata.map((getdata)=>{
              if(getdata.categories=="Current"){
        return (  
          <>
        <a href="/">Current</a>
        <p className="mt-1">{getdata.headline}</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </> )}})}
        
        </li>
        <li>
        <a href="/" >Kid</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li>
        <li>
        {Getdata.map((getdata)=>{
              if(getdata.categories=="Sport"){
        return (  
          <>
        <a href="/">Sports</a>
        <p className="mt-1">{getdata.headline}</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </> )}})}
        </li> 
         <li> 
         {Getdata.map((getdata)=>{
              if(getdata.categories=="Bollywood"){
        return (  
          <>
        <a href="/">Bollywood</a>
        <p className="mt-1">{getdata.headline}</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </> )}})}
        </li>
        <li>
        <a href="/">Bollywood</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li> <li>
        <a href="/">Bollywood</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li> <li>
        <a href="/">Bollywood</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li> <li>
        <a href="/">Bollywood</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li> <li>
        <a href="/">Bollywood</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li> <li>
        <a href="/">Bollywood</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li>
        <li>
        <a href="/">Bollywood</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li> <li>
        <a href="/">Bollywood</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p>
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li> <li>
        <a href="/">Bollywood</a>
        <p className="mt-1">Headlines today: Get news headlines from India and around the world.</p> 
        <hr class="bg-danger border-1 border-top border-secondary sub-border"></hr>
        </li>
        </ol>
        </div>
        <div className="stories">
            <h3 className="divider">Latest News</h3>
            <img src={IndiaGate} className="IndiaGate" alt="IndiaGate" />
           
            {Get_data.map((getdata)=>{
                    
        return (  
            <>
            <p className="mt-2">Welcome to India History Online.

            This is a one-stop online resource for Indian History. The goal is to bring together conclusive evidence from multiple sources into this one website for your convenience.
            
            Until the past few decades, the standard opinion on India’s history has been based on outdated theories that have now been scientifically disproved with ample literary, scriptural, archaeological, geological and genetic data. Much of this data will be presented on this website.</p>
         
            <img src={`http://localhost:5000/image/${getdata.image}`} className="IndiaGate" alt={getdata.path} />  </> )})}
            <p className="mt-2">Welcome to India History Online.

            This is a one-stop online resource for Indian History. The goal is to bring together conclusive evidence from multiple sources into this one website for your convenience.
            
            Until the past few decades, the standard opinion on India’s history has been based on outdated theories that have now been scientifically disproved with ample literary, scriptural, archaeological, geological and genetic data. Much of this data will be presented on this website.</p>
            <img src={Taj} className="IndiaGate" alt="IndiaGate" />
            <p className="mt-2">Welcome to India History Online.

            This is a one-stop online resource for Indian History. The goal is to bring together conclusive evidence from multiple sources into this one website for your convenience.
            
            Until the past few decades, the standard opinion on India’s history has been based on outdated theories that have now been scientifically disproved with ample literary, scriptural, archaeological, geological and genetic data. Much of this data will be presented on this website.
            past few decades, the standard opinion on India’s history has been based on outdated theories that have now been scientifically disproved with ample literary, scriptural, archaeological, geological and genetic data. Much of this data will be presented on this website
            </p>

       
       
            </div>
        <div className="thirdDiv">
        <h3 className="divider">Trending Today</h3>
        <div className="card shadow p-3 mb-5 bg-white rounded thirdDivCard">
        <img src={Hawa} alt="hawa" className="" />
        <p>Hawa Mahal (English translation: "The Palace of Winds" or "The Palace of Breeze") is a palace in Jaipur, India approximately 300 kilometers from the capital city of Delhi.<a href="/">More...</a></p>
       </div>
       <div className="card shadow p-3 mb-5 bg-white rounded thirdDivCard">
       <img src={Rath} alt="hawa" className="" />
       <p>Ratha Yatra is a Hindu festival associated with Lord Jagannath held at Shri Khetra Puri Dham in the state of Odisha, India.<a href="/">More...</a></p>
      </div>
      <div className="card shadow p-3 mb-5 bg-white rounded thirdDivCard">
      <img src={Unity} alt="hawa" className="" />
      <p>Ratha Yatra is a Hindu festival associated with Lord Jagannath held at Shri Khetra Puri Dham in the state of Odisha, India.<a href="/">More...</a></p>
     </div>
      <div className="card shadow p-3 mb-5 bg-white rounded thirdDivCard">
     <img src={Covid} alt="hawa" className="" />
     <p>Ratha Yatra is a Hindu festival associated with Lord Jagannath held at Shri Khetra Puri Dham in the state of Odisha, India.<a href="/">More...</a></p>
    </div>
    <div className="card shadow p-3 mb-5 bg-white rounded thirdDivCard">
    <img src={Farmer} alt="hawa" className="" />
   <p> Ratha Yatra is a Hindu festival associated with Lord Jagannath held at Shri Khetra  <a href="">More..</a></p>
   </div>
       </div>
        </div>
    </> )
}
