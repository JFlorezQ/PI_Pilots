const validation = (input) => {
    const error = {
      name: {},
    };
  
    // Verificar que todos los campos estén llenos
    if (!input.name.forename) {
      error.name.forename = "Por favor ingrese un nombre";
    }
  
    if (!input.name.surname) {
      error.name.surname = "Por favor ingrese un apellido";
    }
  
    if (!input.description) {
      error.description = "Por favor ingrese una descripción";
    }
  
    if (!input.image) {
      error.image = "Por favor ingrese un link";
    }
  
    if (!input.nationality) {
      error.nationality = "Por favor ingrese una nacionalidad";
    }
  
    if (!input.dob) {
      error.dob = "Por favor ingrese una fecha";
    }
  
    if (!input.teams) {
      error.teams = "Por favor ingrese un equipo";
    }
  
    // Otras verificaciones
  
    // Verificar que la descripción tenga entre 20 y 256 caracteres
    if (input.description.length < 20 || input.description.length > 256) {
      error.description = "La descripción debe tener entre 20 y 256 caracteres.";
    }
  
    // Verificar que la imagen sea un enlace válido
    if (
      !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(input.image)
    ) {
      error.image = "La imagen debe ser un enlace válido";
    }
  
    // Verificar que la fecha de nacimiento esté en el formato correcto
    if (!/^\d{4}-\d{2}-\d{2}$/.test(input.dob)) {
      error.dob = "La fecha de nacimiento debe estar en el formato AAAA-MM-DD";
    }
  
    return error;
  };
  
  export default validation;
  
  

