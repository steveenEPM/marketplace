import axios from "axios";

export const fakeStore = (url)=>{

    const instancia = axios({
        method:"get",
        url:url,
        baseURL:"https://fakestoreapi.com"
    })

    return instancia

}

'https://fakestoreapi.com'