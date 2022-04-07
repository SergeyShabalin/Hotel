import react, {useState, useEffect} from 'react'
import axios from "axios";

 const Home = () =>{

     useEffect(() => {
         hotels()
     }, []);

     const hotels = () => {
         axios.get('http://localhost:4000/hotels').then((resp) => {
             console.log(resp.data)
         }).catch((error) => {
             console.warn(error, 'server error');
         })
     }

    return(
        <div>home page</div>
    )
 }

 export default Home