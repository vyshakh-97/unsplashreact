import apikey from "../api/config";
import axios from "axios";

async function get(){
        try{
          const apicontent= await axios.get(`https://api.unsplash.com/photos/?&client_id=${apikey}`);
          return apicontent;
        } catch (error) {
          console.log(error);
        }
};
export default get;



