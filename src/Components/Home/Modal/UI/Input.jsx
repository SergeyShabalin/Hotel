const Input = ({placeholder, addDataInputs, inputName}) => {

    return (
        <div>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                onChange={addDataInputs}
                name={inputName}
            />
        </div>
    )
}

export default Input