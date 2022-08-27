const ButtonValidation = (props) => {
    return (
    <div>
        <button onClick={() => {props.buttonClean()}}
    >
        Validar
    </button>
    </div>
    )
}

export default ButtonValidation;