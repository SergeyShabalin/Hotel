import React, {useState} from 'react'
import axios from "axios";
import './Styles/ConfirmRegistration.css'
import './UI/Button.css'
import {format} from 'date-fns'

const ConfirmRegistration = ({userData, rooms, date,backToRegistration}) => {

    const [isBooking, setIsBooking] = useState(false)
    const [bookingId, setBookingId] = useState()

    const userDate = format(new Date(date), 'dd/MM/yyyy')

    function addBooking() {
        axios.post('http://localhost:4000/bookingList', {
            firstName: userData.firstName,
            name: userData.name,
            lastName: userData.lastName,
            roomNumber: rooms.number,
            roomName: rooms.name,
            date: userDate,
            telNumber: userData.telNumber
        })
            .then(function (response) {
                setBookingId(response.data.id)
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsBooking(true)
    }

    function deleteBooking() {
        setIsBooking(false)
        axios.delete('http://localhost:4000/bookingList/' + bookingId).then(() => {
            console.log('Delete successful')
        })
    }

    return (

        <div className='main'>
            {
                !isBooking
                    ? <h1 className='head'> Проверьте информацию о бронировании </h1>
                    : <h1 className='head'> Комната забронирована </h1>
            }

            <div className='user-info'>
                <h2>Фамилия: {userData.firstName}</h2>
                <h2>Имя: {userData.name}</h2>
                <h2>Отчество: {userData.lastName}</h2>
                <h2>Номер телефона: {userData.telNumber}</h2>
                <h2>Ваш номер: {rooms.number}</h2>
                <h2>Тип номера: {rooms.name}</h2>
                <h2>Дата бронирования: {userDate}</h2>
            </div>
            <div className='button-field'>
                <div className='button' onClick={backToRegistration}>
                    <div className='label-button'>Назад</div>
                </div>
                {!isBooking ?
                    <div className='button' onClick={addBooking}>
                        <div className='label-button'>Забронировать</div>
                    </div> :
                    <div className='button button-refuze' onClick={() => deleteBooking(rooms.id)}>
                        <div className='label-button'>Отказаться</div>
                    </div>
                }

            </div>
        </div>

    )
}

export default ConfirmRegistration