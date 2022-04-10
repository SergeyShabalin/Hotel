import React, {useState} from "react";
import './Styles/Pagination.css'

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


        function pages() {
            return (
                <div className='pages'>
                    {pageNumber > 1 &&
                        <div>
                            <div className='btn-position' onClick={() => setPageNumber(pageNumber - 1)}> пред.</div>
                        </div>}
                    {numberOfRooms
                        .filter(item => item >= leftPosition && item <= rightPosition)
                        .map(item => {
                            return (
                                <div className={item === currentPage ? 'limit active' : 'limit'}
                                     key={item}
                                     onClick={() => getPage(item, sentLimit, item)}>
                                    {item}
                                </div>
                            )
                        })
                    }

                    {listPages > pageNumber &&
                        <div>
                            <div className='btn-position' onClick={() => setPageNumber(pageNumber + 1)}>след.</div>
                        </div>}
                </div>
            )
        }

        return pages()
    }

    function clickLimit(limit) {
        setSentLimit(limit)
        countPages(limit)
        setPageNumber(1)
        setCurrentLimit(limit)
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