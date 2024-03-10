function BlogPost(props: {
    title: string,
    author: string,
    category: string[],
    desc: string,
    imageUrl: string,
    published: string,
    artLink: string,
}) {
    return ( 
        <>
            <a href={props.artLink} target="blank_" className="p-2 block bg-white border-2 border-blue-100 text-blue-500 w-full rounded-md shadow-md">
                <div className="flex flex-col gap-1 md:space-y-2">
                    <div className="w-full h-[150px] md:h-[200px] rounded-lg mx-auto">
                        <img src={props.imageUrl} alt="image" className="w-full h-full object-cover md:object-cover rounded-lg"/>
                    </div>
                    <h2 className="text-md md:text-lg">{props.title}</h2>
                    <p className="text-sm md:text-md">By {props.author}</p>
                    <div className="flex items-center gap-2">
                        {props.category.map((category, index)=>{
                            return (
                                <span className="bg-blue-500 text-white w-fit py-1 px-2 rounded-full text-xs" key={index}>
                                    {category}
                                </span>
                            )
                        })}
                    </div>
                    {/* <p className="whitespace-prewrap text-sm text-gray-600">{props.desc}</p> */}
                    <span className="text-sm">{new Date(props.published).toLocaleDateString()}</span>
                </div>
            </a>
        </>
    );
}

export default BlogPost;