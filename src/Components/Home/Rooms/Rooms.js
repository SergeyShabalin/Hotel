import React, {useState, useEffect} from 'react'
import axios from "axios";
import 'boxicons';

import Pagination from "../../Pagination/Pagination";
import Sort from "../../Sort/Sort";

import './Styles/Rooms.css'

import {FaUserFriends} from "react-icons/fa";
import {AiOutlineExpandAlt} from "react-icons/ai";
import {RiHome3Line} from "react-icons/ri";
import {BsCurrencyExchange} from "react-icons/bs";
import {BiRuble} from "react-icons/bi";



const Rooms = ({checkModal}) => {

    const [rooms, setRooms] = useState([])
    const [allRooms, setAllRooms] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const url = 'http://localhost:4000/hotel?_page=1&_limit=10'
        hotels(url)
    }, []);

    function getPage(page, limit, item) {
        const url = 'http://localhost:4000/hotel?_page=' + page + '&_limit=' + limit
        hotels(url)
        setCurrentPage(item)
    }

    function getSort(field, order){
        const url = 'http://localhost:4000/hotel?_sort=' + field + '&_order=' + order

        hotels(url)

    }

    const hotels = (url) => {
        axios.get(url).then((resp) => {
            setRooms(resp.data)
            setAllRooms(resp.headers['x-total-count'])
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
        <div >
            <div className='rooms-field'>
                <Sort
                    getSort={getSort}/>
            <div className='box-list'>
                {viewRooms()}
            </div>
            </div>

                <Pagination
                    currentPage={currentPage}
                    getPage={getPage}
                    allRooms={allRooms}/>


        </div>
    )
}

export default Rooms