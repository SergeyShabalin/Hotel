import React, {useState} from 'react'
import './Styles/Fitration.css'


function Filtration({getFilter}) {

    const [prevDate, setPrevDate] = useState()
    const [afterDate, setAfterDate] = useState()
    const [validation, setValidation] = useState(true)

    function getDateBefore({target}) {
        setPrevDate(target.value)
    }

    function getDateAfter({target}) {
        setAfterDate(target.value)
    }

    function applyFilter() {
        if (afterDate < prevDate) {
            setValidation(false)
        } else
            setValidation(true)
        return getFilter(prevDate, afterDate)
    }

    function validationDate(){
        return(
            <div className='error-validation'>Дата начала не может быть позднее даты конца</div>
        )
    }

    return (
        <div className='filtration-content'>
            <div className='header-content'>Фильтрация</div>
            <div className='date-field'>
                <input onChange={getDateBefore} type='date' className="form-control date-input"/>
                <input onChange={getDateAfter} type='date' className="form-control date-input"/>
            </div>
            <div className='button-apply'>
                <button onClick={applyFilter}>Применить</button>
            </div>
            {!validation? validationDate() : null}
        </div>
    )
}

export default Filtration