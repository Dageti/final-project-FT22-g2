import React from 'react';
import "../../styles/registro.css";

const Registro = () => {
    return (
        <>
            <div className="container-registro">
                <div class="card card-registro">
                    <div class="card-body">
                        <div className="card-informacion-registro">
                            <h2>Crear cuenta</h2>

                            <form className='needs-validation' novalidate>
                                <div className="container-inputs-registro">
                                    <input type="text" placeholder='Nombre' className="form-control input-registro" required />
                                    <input type="text" placeholder='Apellido' className="form-control input-registro" required />
                                    <input type="email" placeholder='Email' className="form-control input-registro" required />
                                    <input type="text" placeholder='Contraseña' className="form-control input-registro" required />
                                </div>

                                <div className="container-terminos-y-condiciones">
                                    <input type="checkbox" name="terminos" id="terminosYcondiciones" className='form-check-input' required />
                                    <label className='terminosYcondicionesLabel'>Acepto los términos y condiciones</label>
                                </div>

                                <div className="container-btn-registro">
                                    <button type='submit' className='btn btn-dark w-75'>Registrarme</button>
                                </div>
                            </form>

                            <div className="container-btn-registro-google">
                                <button className="btn btn-danger w-75" type="button" value="Login" disabled>Continúa con <i class="fab fa-google me-2"></i>(Próximamente)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Registro;