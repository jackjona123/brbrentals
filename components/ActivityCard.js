import React from 'react'

function ActivityCard() {
    return (
        <section class="pb-4">
            <div class="bg-black dark:bg-gray-900 rounded-3xl px-6 py-8 pb">
                <h1 class="font-bold text-3xl py-3 mb-0 text-white dark:text-gray-50">Experience the world</h1>
                <p class="font-semibold text-sm mb-0 px-0 pt-2 pb-8 text-white dark:text-gray-50">Unique activities with local experts—in person or online.</p>
                <div class="overflow-x-scroll sm:overflow-hidden ">
                    <div class="flex m-0">
                    <div class="grid-cols-4 px-2 py-4">
                        <div class="w-full">
                        <img class="w-full rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out " src="/images/onlineExperience.png" alt=""></img>
                        <h6 class="font-semibold py-4 text-lg leading-none mb-0 mt-2 text-white dark:text-gray-50">Online Experience</h6>
                        <p class="font-normal text-sm mb-0 mt-1 text-white dark:text-gray-50">Travel the world without leaving home.</p>
                        </div>
                    </div>
                    <div class="grid-cols-4 px-2 py-4">
                        <div class="w-full">
                        <img class="w-full rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out" src="/images/experience.png" alt=""></img>
                        <h6 class="font-semibold py-4 text-lg leading-none mb-0 mt-2 text-white dark:text-gray-50">Experiences</h6>
                        <p class="font-normal text-sm mb-0 mt-1 text-white dark:text-gray-50">Things to do wherever you are.</p>
                        </div>
                    </div>
                    <div class="grid-cols-4 px-2 py-4">
                        <div class="w-full">
                        <img class="w-full rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out" src="/images/adventure.png" alt=""></img>
                        <h6 class="font-semibold py-4 text-lg leading-none mb-0 mt-2 text-white dark:text-gray-50">Adventures</h6>
                        <p class="font-normal text-sm mb-0 mt-1 text-white dark:text-gray-50">Multi-day trips with meals and stays.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActivityCard

