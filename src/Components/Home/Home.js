import React,{useState} from "react";

import Rooms from "./Rooms";
import Modal from "./Modal/Modal";
const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [rooms, setRooms] = useState([])

    function checkModal(isModal, room){
        setShowModal(isModal)
        setRooms(room)
    }

    return (
        <div>home page
            {showModal ?<Modal rooms={rooms}  checkModal={checkModal} /> : null}
            <Rooms checkModal={checkModal}/>
        </div>
    )
}

export default Home