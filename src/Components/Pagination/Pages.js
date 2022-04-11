import React from 'react'

function Pages({pageNumber,currentPage,
                   getPage, setPageNumber,sentLimit,
                   numberOfRooms, listPages,leftPosition,rightPosition}){


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

export default Pages