import axios from "axios"
export default async function fetchBlogs(url: string){
    const data = await axios.get(url)
    return data
}