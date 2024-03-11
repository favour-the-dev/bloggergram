function Banner() {
    return ( 
        <>
        <div className="w-full min-h-[50dvh] lg:min-h-[70dvh] flex flex-col items-center justify-center text-blue-500">
            <div className="flex flex-col space-y-4 items-center justify-center">
                <div className="w-full flex items-center justify-center space-x-1 p-2 cursor-pointer">
                    <i className="w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center fa-solid fa-blog text-2xl md:text-4xl border-2 border-blue-500 p-2 rounded-full"></i>
                </div>
                <h1 className="w-full text-center text-2xl md:text-5xl uppercase font-bold">Welcome to BloggerGram</h1>
                <p className="w-full lg:w-1/2 text-center text-xs md:text-lg leading-relaxed">
                    Your No 1. Blogger App, Sign up to connect with like minded blog freaks like you all 
                    over the world and also, to view your favourite blogs and news outlets in real time.
                </p>
            </div>
        </div>
        </>
    );
}

export default Banner;