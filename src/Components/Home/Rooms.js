import react, {useState, useEffect} from 'react'
import axios from "axios";

import './Styles/Rooms.css'

import 'boxicons';
import {FaUserFriends} from "react-icons/fa";
import {AiOutlineExpandAlt} from "react-icons/ai";
import {RiHome3Line} from "react-icons/ri";
import {BsCurrencyExchange} from "react-icons/bs";
import {BiRuble} from "react-icons/bi";
import Button from "./Modal/UI/Button";


const Rooms = ({checkModal}) => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        hotels()
    }, []);

    const hotels = () => {
        axios.get('http://localhost:4000/hotel').then((resp) => {
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
                            <div onClick={() => checkModal(true, room)} type="button" className="btn">Забронировать</div>
                        </div>
                    </div>
                </div>

            )
        })
        return freeRooms
    }

    return (
        <div className='box-list'>
            {viewRooms()}
        </div>
    )
}

export default Rooms