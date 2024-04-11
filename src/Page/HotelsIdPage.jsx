import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { Map, Marker } from 'pigeon-maps'
import OtherHotel from "../Components/HotelsIdPage/OtherHotel";

const HotelsIdPage = () => {

  const { id } = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [hotel, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])


  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h2>RATING - {hotel?.rating}</h2>
      <div>
        <img src={hotel?.images[0].url} alt="" />
        {
          hotel &&
          <Map
            height={200}
            defaultCenter={[+hotel?.lat, +hotel?.lon]}
            zoom={15}
            maxZoom={16}
            minZoom={10}>
            <Marker anchor={[+hotel?.lat, +hotel?.lon]} color="blueviolet" />
          </Map>
        }
      </div>
      <section>
        <h3>{hotel?.city.name}, {hotel?.city.country}</h3>
        <p>
          <i className='bx bxs-map' ></i>
          <span>{hotel?.address}</span>
        </p>
        <p>
          {hotel?.description}
        </p>
      </section>
      <OtherHotel
        hotel={hotel}
      />
    </div>
  )
}

export default HotelsIdPage