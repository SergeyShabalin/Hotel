import React, {useState, useEffect} from 'react'
import {Api} from '../../../Api'
import 'boxicons';

import Pagination from "../../Pagination/Pagination";
import Sort from "../../Sort/Sort";
import ViewRooms from "./ViewRooms";

import './Styles/Rooms.css'

const Rooms = ({checkModal}) => {

    const [rooms, setRooms] = useState([])
    const [allRooms, setAllRooms] = useState('')
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        const url = 'hotel?_page=1&_limit=10'
        hotels(url)
    }, []);

    function getPage(page, limit, item) {
        const url = `hotel?_page=${page}&_limit=${limit}`
        hotels(url)
        setCurrentPage(item)
    }

    function getSort(field, order){
        const url = `hotel?_sort=${field}&_order=${order}`
        hotels(url)
    }

    const hotels = (url) => {
        Api.get(url).then((resp) => {
            setRooms(resp.data)
            setAllRooms(resp.headers['x-total-count'])
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    return (
        <div >
            <div className='rooms-field'>
                <Sort
                    getSort={getSort}/>
            <div className='box-list'>
                {rooms && rooms.map(room => <ViewRooms
                    room={room}
                    checkModal={checkModal}/>
                )}
            </div>
            </div>
                <Pagination
                    currentPage={currentPage}
                    getPage={getPage}
                    allRooms={allRooms}/>
        </div>
    )
}

export default Rooms