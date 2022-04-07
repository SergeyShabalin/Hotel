import './Button.css'


const Button = ({checkModal}) => {
    return (
        <div className='button-field'>
            <div onClick={() => checkModal(false)} type="button" className="button">
                <div className='label-button'>Забронировать</div>
            </div>
        </div>

    )
}

export default Button