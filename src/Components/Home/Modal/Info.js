import react from 'react'
import './Styles/Info.css'

import {FaUserFriends, FaShower} from "react-icons/fa";
import {RiHome3Line} from "react-icons/ri";
import {AiOutlineExpandAlt} from "react-icons/ai";
import {GrMonitor, GrWifi} from "react-icons/gr";
import {BsFillTelephoneFill, BsSnow} from "react-icons/bs";
import {MdOutlineIron} from "react-icons/md";
import {GiBathtub, GiSlippers, GiTowel, GiSofa, GiDesk, GiTeapot, GiWineBottle,} from "react-icons/gi";
import {SiWindicss} from "react-icons/si";
import {BsFillFileLock2Fill} from "react-icons/bs";
import {MdCoffeeMaker, MdOutlineChair, MdOutlineCleaningServices} from "react-icons/md";
import {BiCabinet, BiFridge} from "react-icons/bi";
import {IoIosBed, IoIosWater} from "react-icons/io";
import {FcSafe} from "react-icons/fc";

const Info = ({info, rooms}) => {
    return (
        <div className='content-info'>

            <div className='info'>
                <div><h5><b>Информация о номере:</b></h5></div>
                <div><FaUserFriends/> До {rooms.numberOfSeats} мест</div>
                <div><RiHome3Line/> Комната {rooms.number}</div>
                <div><AiOutlineExpandAlt/> {rooms.area} кв.м</div>

                {info.video ?
                    <div className='headers'><h5>Видео\Аудио:</h5>
                        <GrMonitor/> {info.video}</div> : null}

                {info.wifi && info.telephone ?
                    <div className='headers'>
                        <h5>WiFi\Телефония:</h5>
                        {info.wifi ? <div><GrWifi/>{info.wifi} </div> : null}
                        {info.telephone ? <div><BsFillTelephoneFill/>{info.telephone}</div> : null}
                    </div> : null}

                {info.conditioner && info.flatiron && info.hairDryer ?
                    <div className='headers'>
                        <h5>Электроника:</h5>
                        {info.conditioner ? <div><BsSnow/> {info.conditioner}</div> : null}
                        {info.flatiron ? <div><MdOutlineIron/> {info.flatiron}</div> : null}
                        {info.hairDryer ? <div><SiWindicss/> {info.hairDryer}</div> : null}
                    </div> : null}

                <div className='headers'>
                    <h5>Входная дверь:</h5>
                    <div><BsFillFileLock2Fill/> {info.lock ? info.lock : 'Механический замок'}</div>
                </div>
                {info.showerCabin && info.Bathroom && info.Slippers && info.bathTowels ?
                    <div className='headers'>
                        <h5>Душевая комната:</h5>
                        {info.showerCabin ? <div><FaShower/> {info.showerCabin}</div> : null}
                        {info.Bathroom ? <div><GiBathtub/> {info.Bathroom}</div> : null}
                        {info.Slippers ? <div><GiSlippers/> {info.Slippers}</div> : null}
                        {info.bathTowels ? <div><GiTowel/> {info.bathTowels}</div> : null}
                    </div> : null}

                {info.Sofa && info.Armchair && info.Desk && info.Wardrobe && info.Bed ?
                    <div className='headers'>
                        <h5>Мебель:</h5>
                        {info.Sofa ? <div><GiSofa/> {info.Sofa}</div> : null}
                        {info.Armchair ? <div><MdOutlineChair/> {info.Armchair}</div> : null}
                        {info.Desk ? <div><GiDesk/> {info.Desk}</div> : null}
                        {info.Wardrobe ? <div><BiCabinet/> {info.Wardrobe}</div> : null}
                        {info.Bed ? <div><IoIosBed/> {info.Bed}</div> : null}
                    </div> : null}

                {info.Safe && info.Fridge && info.Kettle && info.MiniBar && info.DrinkingWater && info.RoomService && info.coffeeMachine ?
                    <div className='headers'>
                        <h5>Прочее:</h5>
                        {info.Safe ? <div><FcSafe/> {info.Safe}</div> : null}
                        {info.Fridge ? <div><BiFridge/> {info.Fridge}</div> : null}
                        {info.Kettle ? <div><GiTeapot/> {info.Kettle}</div> : null}
                        {info.MiniBar ? <div><GiWineBottle/> {info.MiniBar}</div> : null}
                        {info.DrinkingWater ? <div><IoIosWater/> {info.DrinkingWater}</div> : null}
                        {info.RoomService ? <div><MdOutlineCleaningServices/> {info.RoomService}</div> : null}
                        {info.coffeeMachine ? <div><MdCoffeeMaker/> {info.coffeeMachine}</div> : null}
                    </div> : null}
            </div>
        </div>
    )
}

export default Info