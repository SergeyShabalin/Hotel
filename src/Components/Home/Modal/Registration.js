import React, {useState} from "react";
import Input from "./UI/Input";
import './Styles/Registration.css'
import './UI/Button.css'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Registration = ({getUserValue}) => {

    let initState = {firstName: '', name: '', lastName: '', telNumber: ''}

    const [date, setDate] = useState(new Date());
    const [inputData, setInputData] = useState(initState);

    function addDataInputs({target}) {
        setInputData({
            ...inputData, [target.name]: target.value,
        })
    }

    return (
        <div>
            <div className='registration'>
                <div className='calendar'>
                    <div className='registration-label'>Выберите дату брони</div>
                    <Calendar
                        onChange={setDate}
                        value={date}
                        className='calendar-field'/>
                </div>
                <div className='registration-field'>
                    <div className='registration-label'>Введите личные данные</div>
                    <div className='inputs'>

                        <Input
                            placeholder='Фамилия'
                            addDataInputs={addDataInputs}
                            inputName='firstName'
                        />
                    </div>
                    <div className='inputs'>
                        <Input placeholder='Имя'
                               addDataInputs={addDataInputs}
                               inputName='name'/>
                    </div>
                    <div className='inputs'>
                        <Input placeholder='Отчество'
                               addDataInputs={addDataInputs}
                               inputName='lastName'/>
                    </div>
                    <div className='inputs'>
                        <Input placeholder='Телефон'
                               addDataInputs={addDataInputs}
                               inputName='telNumber'/>
                    </div>
                    <div className='button-field'>
                        <div className='button'
                             onClick={() => getUserValue(date, inputData)}
                        >
                            <div className='label-button'>Забронировать</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration