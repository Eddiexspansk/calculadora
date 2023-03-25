import React from "react";
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png'


function FreeCodeLogo() {
    return(

        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='logo de freeCodeCamp' />
      
    );
}
export default FreeCodeLogo;