import React from 'react'
import {FaUserFriends} from "react-icons/fa";
import {RiHome3Line} from "react-icons/ri";
import {AiOutlineExpandAlt} from "react-icons/ai";
import {BsCurrencyExchange} from "react-icons/bs";
import {BiRuble} from "react-icons/bi";

function ViewRooms({room,checkModal}){
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
}

export default ViewRooms