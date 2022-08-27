const input = (props) => {
    return (
        <div>

        <h5>Nombre</h5>
        <input
            value={props.name}
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => props.setName(e.target.value)}
            placeholder="Ingresa Tu Nombre"
        />

        <h5>Password</h5>
        <input 
            value={props.input}
            type="password"
            name="Contraseña"
            className="form-control"
            onChange={(e) => props.setInput(e.target.value)}
            placeholder="Ingresa Tu Contraseña"
        />
        </div>
    )
}

export default input;