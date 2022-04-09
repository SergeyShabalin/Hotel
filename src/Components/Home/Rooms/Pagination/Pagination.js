import React, {useState} from "react";
import './Styles/Pagination.css'


const Pagination = ({rooms, getPage}) => {


    console.log(rooms.length)

    function check(limit) {

    }

    function countPages(limit) {

        let divide = rooms.length / limit
               let count
        if ((divide ^ 0) === divide) {
            count = Math.floor(divide)
        } else {
            count = Math.floor(divide) + 1
        }
        console.log('длина массива',rooms.length)
        console.log('будет страниц по факту',count)

        let a =[]
        for(let i=0; i<count; i++){
            a.push(i)
        }

        let pages = a.map(item => {
            console.log(item)
            return (
                <div className='limit' onClick={() => getPage(count)}>{item+1}</div>
            )
        })
        return pages
    }

    return (
        <div className='paginations'>

            <div className="pages">
                {countPages(4)}
            </div>
            <div className='limit-field'>
                <div className='label-limit'>Показать по:</div>
                <div className='limit' onClick={() => countPages(5)}>5</div>
                <div className='limit' onClick={() => countPages(10)}>10</div>
                <div className='limit' onClick={() => countPages(2)}>2</div>
                {/*<div className='limit' onClick={() => getPage(1, 15)}>15</div>*/}
            </div>
        </div>


    )
}

export default Pagination