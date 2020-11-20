import React from 'react';
import '../Styles/cotizadorStyless.css';
import logo from '../../Assets/img/world.png'

export default function Cotizador(){

    return(

        <div className="container">
    
            <form action="" method="POST" className="bg-form-innova" id="formulario">

                <div className="xyz bg-primary text-light py-3">
                    <h3 class="">¡Bienvenido! <br/>A nuestro cotizador de servicios</h3>
                </div>
                <div className="py-3">
                    <img src={logo} className="responsiveImg" alt=""/>
                </div>
                <div className="py-3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, temporibus!</p>
                </div>

                <div class="py-2">
                    <div class="form-group row">
                           
                        <input type="text" class="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1 " name="nombre" id="nomV" placeholder="Nombre" required/>
                       
                        <input type="text" class="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1 offset-lg-2 offset-md-2" placeholder="Empresa" name="empresa" id="empresaV" required/>
                    </div>     
                    <div class="form-group row">
                        <input type="email" class="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1" name="correo" id="correoV" placeholder="Correo" required/ >
                    
                        <input type="number" class="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1 offset-lg-2 offset-md-2" placeholder="Teléfono de contacto" name="telefono" id="numeroV" required/>
                    </div>
                    
                    <h4 class="py-3">Seleccione un servicio</h4>
                                       
                    <div class="form-group row">
                        
                        <select  id="" class="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1" name="servicio">
                            <option value="1"></option>
                            <option value="Ecommerce">Ecommerce</option>
                            <option value="Web development">Web development</option>
                            <option value="Marketing">Marketing</option>
                        </select>

                        <select  id="servicio" class="form-control col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10 offset-1 offset-lg-2 offset-md-2" name="especialidad" onchange="SelectVisible();">
                            <option value="1"></option>
                            <option value="Página web (estática)">Página web (estática)</option>
                            <option value="Página web (dinámica)">Página web (dinámica)</option>
                            <option value="App hibrida">App hibrida</option>
                            <option value="Montar un servidor">Montar un servidor</option>
                            <option value="Desarrollo de BD">Desarrollo de BD</option>
                            <option value="Otro">Otro</option>
                        </select>
                        
                    </div>                
                    
                    <h4 class="py-3">Recaptcha</h4>

                    <div class="form-group row">
                        
                    </div>

                    <div class="py-3 form-group ">
                            <input type="submit" value="Enviar" class="btn btn-success btn-lg"/>
                            <input type="button" value="Cancelar" class="btn btn-danger btn-lg"/>
                    </div>
                    
                </div>

            </form>   

        </div>
    );
}