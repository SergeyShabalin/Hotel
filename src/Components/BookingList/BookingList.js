import React, {useEffect, useState} from 'react'
import {Api} from '../../Api'

import Filtration from "../Filtration/Filtration"
import {RiDeleteBack2Line} from "react-icons/ri";
import './Styles/BookingList.css'
    ;
import {format} from "date-fns";

const BookingList = () => {
    const [bookingList, setBookingList] = useState([])
    const   url ='bookingList'


    useEffect(() => {
        viewList(url)
    }, []);

    function viewList(url) {
        Api.get(url).then((resp) => {
            setBookingList(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    function getFilter(prevDate, afterDate) {
        const userDate = format(new Date(prevDate), 'dd/MM/yyyy')
        const userDate2 = format(new Date(afterDate), 'dd/MM/yyyy')
        const ref = `bookingList?date_gte=${userDate}&date_lte=${userDate2}`
        viewList(ref)
    }

    function deleteBooking(booking) {
        const confirmMessage=window.confirm('бронирование номера ' + booking.roomNumber + ' на ' + booking.date + ' будет отменено. Продолжить?')
        if (confirmMessage) {
            Api.delete('bookingList/' + booking.id).then(() => {
                let devicesWithDelete = bookingList.filter((({_id}) =>  booking.id !== _id))
                setBookingList(devicesWithDelete)
                viewList(url)
            })
        }
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
                    <th><RiDeleteBack2Line className='icon-del' onClick={() => deleteBooking(item)}/></th>
                </tr>
            )
        })
        return list
    }

    return (
        <div className='all-content'>
            <div className='filtration'><Filtration getFilter={getFilter}/></div>
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

        </div>
    )
}

export default BookingList