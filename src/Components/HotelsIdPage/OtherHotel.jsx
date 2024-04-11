import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"
import "../HomePage/style/HotelCard.css";

const OtherHotel = ({ hotel }) => {

const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`
const [ hotelsInCity, getHotelInCity ] = useFetch(url)

useEffect(() => {
    if (hotel) {
        getHotelInCity() 
    }
}, [hotel])


  return (
    <section>
        <h3>othe hotels in <span>{hotel?.city.name}</span></h3>
        <div className="card-container">
            {
                hotelsInCity?.filter(hotelInfo => hotelInfo.id !== hotel.id).map( hotelInfo => (
                    <HotelCard
                        key={hotelInfo.id} 
                        hotel={hotelInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default OtherHotel