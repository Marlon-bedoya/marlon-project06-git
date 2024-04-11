
import { useSelector } from "react-redux";
import HotelCard from "../Components/HomePage/HotelCard";
import { useRef, useState } from "react";
import CategoryFilter from "../Components/HomePage/CategoryFilter";


const HomePage = () => {

  const [inputName, setInputName] = useState('')

  const  hotels = useSelector(states => states.hotels)

  const inputValue = useRef()

  const handleChange = () => {
    setInputName(inputValue.current.value)
  }

  const cbfilter = hotelInfo => {
    const filterName = hotelInfo.name.toLowerCase().includes(inputName.toLocaleLowerCase().trim())
    return filterName;
  }

  return (
    <div>
      <input onChange={handleChange} value={inputName} ref={inputValue} type="text" />
    <div>
      <aside>
        <h3>Filter</h3>
        <CategoryFilter />
      </aside>
      {
        hotels?.filter(cbfilter).map( hotelInfo => (
          <HotelCard 
            key={hotelInfo.id}
            hotel={hotelInfo}
          />
        ))
      }
    </div>
    </div>
  )
}

export default HomePage