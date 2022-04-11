import React, {useState} from "react";
import './Styles/Pagination.css'
import Pages from "./Pages";

const Pagination = ({getPage, allRooms, currentPage}) => {

    const [sentLimit, setSentLimit] = useState(10)
    const [pageNumber, setPageNumber] = useState(1)
    const [currentLimit, setCurrentLimit] = useState(10)

    function countPages(limit) {
        let divide = allRooms / limit
        let count
        if ((divide ^ 0) === divide) {
            count = Math.floor(divide)
        } else {
            count = Math.floor(divide) + 1
        }

        let numberOfRooms = []
        for (let i = 1; i < count + 1; i++) {
            numberOfRooms.push(i)
        }

        let list = 2
        let listPages = Math.ceil(count / list)
        let leftPosition = (pageNumber - 1) * list + 1
        let rightPosition = pageNumber * list

       return(
           <Pages
           pageNumber={pageNumber}
           setPageNumber={setPageNumber}
           numberOfRooms={numberOfRooms}
           listPages={listPages}
           leftPosition={leftPosition}
           rightPosition={rightPosition}
           currentPage={currentPage}
           sentLimit={sentLimit}
           getPage={getPage}/>
       )
    }

    function beginPage(){
        setPageNumber(1)
    }

    function clickLimit(limit) {
        setSentLimit(limit)
        setCurrentLimit(limit)
        beginPage()
        countPages(limit)
        return getPage(1, limit)
    }

        let limits =[3,5,10,15]
        let limites = limits.map(item=> <div key={item}
                     className={item===currentLimit? 'active limit' : 'limit' }
                     onClick={()=>clickLimit(item)}>{item}</div>
        )


    return (
        <div className='paginations'>
            <div>
                {countPages(sentLimit)}
            </div>
            <div className='limit-field'>
                <div className='label-limit'>Показать по:</div>
                {limites}
            </div>
        </div>
    )
}

export default Pagination