import Image from "next/image"

function FullCard({img,title,description,buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative  max-w-screen-2xl min-w-[300px]">
                <div className="relative h-96 max-w-screen-2xl min-w-[300px]">
                    <Image 
                        src={img} 
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl" 
                    />
                </div>
            </div>
            <div className="absolute top-32 sm:top-40 left-12">
                <h3 className="text-center font-bold pb-2 sm:text-left text-4xl text-white dark:text-gray-50 mb-3 w-64 ">{title}</h3>
                <p className="text-white dark:text-gray-50">{description}</p>
            </div>                
            <div className="absolute top-64 pt-4 sm:pt-0 sm:top-64 left-24 sm:left-12">
                <button className="align-center text-md px-8 py-4 rounded-lg mt-5 text-black bg-white dark:bg-gray-900 dark:text-gray-50  shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ">{buttonText}</button>
            </div>
        </section>
    )
}

export default FullCard
