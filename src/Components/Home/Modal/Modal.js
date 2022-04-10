import React, {useState} from 'react'

import Info from "./Info";
import Registration from "./Registration";
import ConfirmRegistration from "./ConfirmRegistration";

import './Styles/Modal.css'

const Modal = ({rooms, checkModal}) => {

    const [isRegistration, setRegistration] = useState(false);
    const [userData, setUserData] = useState({});
    const [date, setDate] = useState(new Date);
    const [g, setG] = useState(true);

    function getUserValue(userDate, userInputData) {
        setUserData(userInputData)
        setDate(userDate)
        setRegistration(true)
    }

    function backToRegistration(){
        setRegistration(false)
    }

    function closeModal(isModal){
        return checkModal(isModal)
    }

    return (
        <div className='modalOpacity'>
            <div className='modalWindow'>
                {isRegistration ?
                    <ConfirmRegistration
                        userData={userData}
                        rooms={rooms}
                        date={date}
                        backToRegistration={backToRegistration}
                    /> :
                    <div className='content-room'>
                        <div>
                            <div className='content-img'>
                                <img className='image-modal' src={rooms.img}/>
                                <div className='label'>{rooms.name}</div>
                            </div>
                            <Registration
                                getUserValue={getUserValue}
                                closeModal={closeModal}/>

                        </div>
                        <Info info={rooms.info}
                              rooms={rooms}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Modal