import react, {useState, useEffect} from 'react'
import axios from "axios";

import './Styles/Rooms.css'

import 'boxicons';
import {FaUserFriends} from "react-icons/fa";
import {AiOutlineExpandAlt} from "react-icons/ai";
import {RiHome3Line} from "react-icons/ri";
import {BsCurrencyExchange} from "react-icons/bs";
import {BiRuble} from "react-icons/bi";
import Button from "../Modal/UI/Button";
import Pagination from "./Pagination/Pagination";


const Rooms = ({checkModal}) => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {

        const url = 'http://localhost:4000/hotel?_page=1&_limit=15'
        hotels(url)
    }, []);

    function getPage(page,limit) {
        console.log('page',page)
        const ref = 'http://localhost:4000/hotel?_page=' + page + '&_limit='+limit
        hotels(ref)

    }

    const hotels = (ref) => {
        axios.get(ref).then((resp) => {
            setRooms(resp.data)
            viewRooms()
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }





    function viewRooms() {
        let freeRooms = rooms && rooms.map(room => {
            return (
                <div key={room.id} className='grid-item'>
                    <img className='image' src={room.img}/>
                    <div className='header'>
                        <div className='title'>
                            {room.name}
                        </div>
                    </div>

                    <div className='properties'>
                        <div className='property'>
                            <FaUserFriends className='icon'/>
                            <div className='prorerty-label'>
                                До {room.numberOfSeats} мест
                            </div>
                        </div>
                        <div className='property'>
                            <RiHome3Line className='icon'/>
                            <div className='prorerty-label'>
                                Комната {room.number}
                            </div>
                        </div>
                        <div className='property'>
                            <AiOutlineExpandAlt className='icon'/>
                            <div className='prorerty-label'>
                                {room.area} кв.м
                            </div>
                        </div>
                    </div>

                    <div className='price-field'>
                        <div className='property-price'>
                            <BsCurrencyExchange className='icon_price'/>
                            <div className='price-label'>{room.price}
                                <BiRuble className='icon'/></div>
                        </div>

                        <div className='property-price'>
                            <div onClick={() => checkModal(true, room)} type="button" className="btn">Забронировать
                            </div>
                        </div>
                    </div>
                </div>

            )
        })
        return freeRooms
    }

    return (
        <div>
            <Pagination
                rooms={rooms}
                getPage={getPage}/>
            <div className='box-list'>
                {viewRooms()}
            </div>
        </div>
    )
}

export default Rooms