const Landing =()=>{
    return(
        <div>
        <h1 className="texto"> Bienvenido conductor.</h1>
        <h2 className="texto"> Para iniciar tu carrera dale click al botón</h2>
        <button><NavLink to={`/home`} >Ingresar</NavLink></button>
        </div>
    )
 }
 export default Landing;