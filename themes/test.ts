import { response } from "express"

const text = 'hello'

const fetchData = (response: string): string => {
    if(!response){
        return;
    }
    return response;
}

fetchData(text)