import axios from 'axios';



const data = 'e'

const fetchData = async () => {
    const response = await axios.get('link').then((res)=>console.log(res)).catch((err)=>console.error(err));

    return response;
}