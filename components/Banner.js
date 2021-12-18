import Image from "next/image"

function Banner() {
    return (
        <div className="relative object-cover h-[400px] sm:h-[500px] lg:h-[700px] xl:h-[820px] 2xl:h-[1024px]">
            <Image 
                src="/images/hero-bg.jpg" layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <a href="/search?location=london&startDate=2021-09-03T02%3A50%3A58.693Z&endDate=2021-09-03T02%3A50%3A58.693Z&noOfGuests=1">
                    <button className="text-blue-450 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
                </a>
            </div>
        </div>
    )
}

export default Banner
