import axios from "axios";
import { IData, IGetDataOutput } from "./interfaces";


export const getData= async (id:number): Promise<IGetDataOutput> => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = response.data
        if (data)
            return { data:data as IData, success: true };
        else
            return { errorMessage: 'There was an error', success: false };
    } catch (error) {
        console.log(error);
        return { errorMessage: 'There was an error', success: false };
    }
};