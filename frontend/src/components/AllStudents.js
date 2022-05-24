import React,{useState,useEffect} from "react";
import axois from "axios";

export default function AllStudents(){
 const [students, setStudents] = useState({});

  useEffect(()=>{
    function getStudents(){
      axois.get("http://localhost:8070/student/").then((res) =>{
         console.log(res);
        //  setStudents(res);
        
      }).catch((err) =>{
        alert(err.message);
      })
    }
    getStudents();
  },[]);

  return(
      <div>
          <h1>All students</h1>
      </div>
  )
}



