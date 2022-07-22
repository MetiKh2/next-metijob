import axios from 'axios'

 export const baseUrl="http://localhost:5272";
export const getAxiosInstanceApi=()=>{
   return axios.create({
        baseURL:baseUrl+"/api/v1/",
        headers:{
            //"x-auth-token":localStorage.getItem('x-auth-token'),
            'Content-Type': 'application/json'
        }
    });
}
// export const userId=localStorage.getItem('userId');