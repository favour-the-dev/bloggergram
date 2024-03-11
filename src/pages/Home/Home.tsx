import fetchBlogs from "../../api/fetchBlogs";
import {toast} from 'react-toastify';
import { useState, useEffect} from "react";
import Banner from "./components/Banner";
import BlogPost from "./components/BlogPost";
import CompLoader from "../../components/CompLoader";
function Home() {
    const [loading, setLoading] = useState<boolean>(false);
    const API_KEY: string = "MIKZJHsbsJY9Usr5iF0AnF6n-KULl1n6NceGDelUOiO5xdeX"
    const url = `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${API_KEY}`
    const [blogsArr, setBlogsArr] = useState<any[]>([])
    useEffect(()=>{
        setLoading(true)
        fetchBlogs(url)
        .then(async (reponse:any)=>{
            setLoading(false)
            toast.success('successfully fetched blogs')
            const blogaArr = await reponse.data.news;
            setBlogsArr(blogaArr.slice(0, 8))
        }).catch((err)=>{
            toast.error(err.message)
        })
    }, [url])
    return ( 
        <>
            <div className="p-4">
                <CompLoader isLoading={loading}/>
                <Banner/>
                <div>
                    <h2 className="text-xl md:text-2xl uppercase text-blue-400 fofnt-bold my-4">
                        Latest Blogs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            blogsArr.map((blog, index)=>{
                                return(
                                    <BlogPost 
                                    key={index}
                                    title={blog.title}
                                    author={blog.author}
                                    category={blog.category}
                                    imageUrl={blog.image}
                                    desc={blog.description}
                                    artLink={blog.url}
                                    published={blog.published}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;