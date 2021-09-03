import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    MoonIcon,
    SunIcon
} from "@heroicons/react/solid"
import { useEffect, useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'




const Header = ({placeholder}) => {
    const [mode,setMode] = useState(false)
    const [searchInput,setSearchInput] = useState("")
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())
    const [noOfGuests,setNoOfGuests] = useState(1)
    const route = useRouter()

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }

    const resetInput = () => {
        setSearchInput("")
        
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('Enter was pressed.')
        }
      }

    const search = () => {
        route.push({
            pathname:"/search",
            query:{
                location:searchInput,
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                noOfGuests:noOfGuests
            }
        })
    }

    useEffect(() => {
        if(localStorage.getItem("theme") === null) {
            localStorage.setItem("theme","light")
        }else if (localStorage.getItem('theme') === "dark" ) {
            document.documentElement.classList.add('dark')
            setMode(true)
        } else {
            document.documentElement.classList.remove('dark')
            setMode(false)
        }
    },[mode])

    const darkModeSwitcher = () => {
        setMode(true) 
        localStorage.setItem("theme","dark")
    }

    const lightModeSwitcher = () => {
        setMode(false)
        localStorage.setItem("theme","light")
    }

    return (
        <header className="sticky top-0 z-50 grid sm:grid-cols-3 bg-white dark:bg-gray-900  shadow-md p-5 md:px-10">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image 
                    onClick={() => route.push("/")} 
                    src="/images/header.png"
                    layout="fill" 
                    objectFit="contain"
                    objectPosition="center"
                />
            </div>

            {/* Middle - Search Section */}
            <div className="hidden sm:flex items-center border-2 rounded-full py-2 md:shadow-sm">
                <input className="pl-5 bg-transparent text-center outline-none flex-grow text-sm text-gray-600 placeholder-gray-400 rounded-full" type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder={placeholder || "Search"} />
                <SearchIcon 
                    className="hidden lg:inline-flex h-8 bg-blue-450 text-white rounded-full p-2 cursor-pointer md:mx-2" 
                />
            </div>

            {/* Right */}
            <div className="hidden sm:flex space-x-4 items-center justify-end text-gray-500 dark:text-gray-50 pl-5" >
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                {
                    !mode ? (
                        <MoonIcon className="h-6 cursor-pointer" onClick={darkModeSwitcher} />
                    ):(
                        <SunIcon className="h-6 cursor-pointer" onClick={lightModeSwitcher} />
                    )
                }

                <div className="hidden sm:flex items-center space-x-2 border-2 p-2 rounded-full ">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {
                searchInput && (
                    <div className="hidden sm:flex  flex-col col-span-3 mx-auto rounded dark:bg-gray-900">
                        <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#38c7ff"]}
                        onChange={handleSelect}
                        />
                        <div className="flex items-center border-b mb-4">
                            <h2 className="text-2xl flex-grow font-semibold dark:text-gray-50
                            ">Number of Guests</h2>

                            <UsersIcon className="h-5 dark:text-gray-50" />
                            <input type="number" className="w-12 pl-2 text-lg dark:bg-gray-900 dark:placeholder-gray-50 dark:text-white outline-none text-red-400" value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} />
                        </div>
                        <div className="flex">
                            <button className="flex-grow button dark:text-gray-50" onClick={resetInput}>Cancel</button>
                            <button className="flex-grow button dark:text-gray-50" onClick={search}>Search</button>
                        </div>
                    </div>
                )
            }
        </header>
    )
}

export default Header
