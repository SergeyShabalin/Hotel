import React, {useContext} from 'react'
import './Styles/ConfirmRegistration.css'
import './UI/Button.css'
import {format} from 'date-fns'

const ConfirmRegistration = ({userData, rooms, date}) => {

    const userDate = format(new Date(date), 'dd/MM/yyyy')

    function addBooking() {

    }

    return (

        <div className='main'>
            <h1 className='head'>Проверьте информацию о бронировании</h1>
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
                    <div className='button'
                         onClick={addBooking}
                    >
                        <div className='label-button'>Забронировать</div>
                    </div>
                </div>
        </div>

    )
}

export default ConfirmRegistration