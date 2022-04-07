import react from 'react'
import './Styles/Modal.css'
import {FaUserFriends} from "react-icons/fa";
import {RiHome3Line} from "react-icons/ri";
import {AiOutlineExpandAlt} from "react-icons/ai";
import { GrMonitor, GrWifi } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";

const Modal = ({rooms,checkModal}) => {

    return (
        <div className='modalOpacity'>
            <div className='modalWindow'>
                <div className='content-room'>
                    <div className='content-img'>
                        <img className='image-modal' src={rooms.img}/>
                        <div className='label'>{rooms.name}</div>
                    </div>

                    <button onClick={() => checkModal(false)}>Закрыть</button>
                </div>

                <div className='content-info'>

                    <div>
                      <FaUserFriends/>  До {rooms.numberOfSeats} мест
                    </div>

                    <div >
                      <RiHome3Line/>  Комната {rooms.number}
                    </div>

                    <div >
                      <AiOutlineExpandAlt/>  {rooms.area} кв.м
                    </div>

                    <div className='title-info'>
                        Удобства
                    </div>
                    <div >
                        <GrMonitor/>  {rooms.info.video}
                    </div>

                    <div >
                        <GrWifi/>  {rooms.info.wifi ? rooms.info.wifi : 'нет'}
                    </div>

                    <div >
                        <BsFillTelephoneFill/>  {rooms.info.telephone ? rooms.info.telephone : 'нет'}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Modal