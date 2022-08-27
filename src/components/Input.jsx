const input = (props) => {
    return (
        <div>

        <h5>Nombre</h5>
        <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => props.setName(e.target.value)}
            value={props.name}
            placeholder="Ingresa Tu Nombre"
        />

        <h5>Password</h5>
        <input 
            type="password"
            name="Contraseña"
            className="form-control"
            onChange={(e) => props.setInput(e.target.value)}
            value={props.password}
            placeholder="Ingresa Tu Contraseña"
        />
        </div>
    )
}

export default input;