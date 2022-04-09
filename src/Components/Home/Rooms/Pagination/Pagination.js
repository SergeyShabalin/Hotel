import React, {useEffect, useState} from "react";
import './Styles/Pagination.css'

const Pagination = ({getPage, allRooms}) => {

    const [sentLimit, setSentLimit] = useState(10)

    const [color1, setColor1] = useState('limit')

    function countPages(limit) {
        let divide = allRooms / limit
        let count
        if ((divide ^ 0) === divide) {
            count = Math.floor(divide)
        } else {
            count = Math.floor(divide) + 1
        }

        let numberOfRooms = []
        for (let i = 0; i < count; i++) {
            numberOfRooms.push(i)
        }



        let pages = numberOfRooms.map(item => {
            let page = item + 1
            return (
                <div key={page}
                     className='limit'
                     onClick={() => getPage(page, sentLimit)}>
                    {page}
                </div>
            )
        })


        return pages
    }

    function clickLimit(limit) {
        setSentLimit(limit)
        countPages(limit)
        return getPage(1, limit)
    }

    return (
        <div className='paginations'>
            <div className="pages">
                {countPages(sentLimit)}
            </div>
            <div className='limit-field'>
                <div className='label-limit'>Показать по:</div>
                <div className={`limit ${color1}`} onClick={() => clickLimit(3)}>3</div>
                <div className={`limit ${color1}`} onClick={() => clickLimit(5)}>5</div>
                <div className={`limit ${color1}`} onClick={() => clickLimit(10)}>10</div>
                <div className={`limit ${color1}`} onClick={() => clickLimit(15)}>15</div>
            </div>
        </div>
    )
}

export default Pagination