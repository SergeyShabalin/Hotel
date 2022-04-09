import React, {useEffect, useState} from 'react'
import axios from "axios";
import { RiDeleteBack2Line } from "react-icons/ri";

import './Styles/BookingList.css'

const BookingList = () => {
    const [bookingList, setBookingList] = useState([])


    useEffect(() => {
        viewList()
    }, []);

    const viewList = () => {
        axios.get('http://localhost:4000/bookingList').then((resp) => {
            setBookingList(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    function takeList() {
        let list = bookingList.map(item => {
            return (
                <tr key={item.id}>
                    <th>{item.firstName}</th>
                    <th>{item.name}</th>
                    <th>{item.lastName}</th>
                    <th>{item.roomNumber}</th>
                    <th>{item.roomName}</th>
                    <th>{item.date}</th>
                    <th>{item.telNumber}</th>
                    <th><RiDeleteBack2Line className='icon-del' /></th>
                </tr>
            )
        })
        return list
    }

    return (
        <div className='list-booking'>
            <table className='table'>
                <thead className='thead-dark'>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Номер комнаты</th>
                    <th>Тип номера</th>
                    <th>Дата брони</th>
                    <th>Номер телефона</th>
                </tr>
                </thead>
                <tbody>
                {takeList()}
                </tbody>
            </table>
        </div>
    )
}

export default BookingList