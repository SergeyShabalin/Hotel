import React from 'react'

import './Styles/Sort.css'

function Sort({getSort}) {

    function postSort({target}) {
        let values = target.value.split(',')
        return getSort(values[0], values[1])
    }

    return (
        <div className='sort-field'>
            <div className='label-sort'>сортировка</div>
            <div>
                <select className="form-control" id="inputGroupSelect01" onChange={postSort}>
                    <option value={['', '']} selected>По умолчанию...</option>
                    <option value={['price', 'ask']}>Цена по возрастанию</option>
                    <option value={['area', 'ask']}>Площадь по возрастанию</option>
                    <option value={['numberOfSeats', 'ask']}>Кол-во мест по возрастанию</option>
                    <option value={['price', 'desc']}>Цена по убыванию</option>
                    <option value={['area', 'desc']}>Площадь по убыванию</option>
                    <option value={['numberOfSeats', 'desc']}>Кол-во мест по убыванию</option>
                </select>
            </div>
        </div>
    )
}

export default Sort