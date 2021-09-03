import { HeartIcon, StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

function InfoCard({img,location,title,description,start,price,total}) {

    console.log(img)

    return (
        <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-8">
                <Image 
                    src={img} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-2xl"
                />
            </div>

            <div className="flex flex-col flex-grow pl-5 dark:text-gray-50">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500 dark:text-gray-300 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {start}
                    </p>

                    <div>
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
