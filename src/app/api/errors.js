
export const fetchError = (requestName) => {
    return  {
        show: true, 
        severity: "error",
        title: "Error fatal",
        message: `Error al realizar la petición de ${requestName}` 
    }
}

export const sessionError = (requestName) => {
    return  {
        show: true, 
        severity: "error",
        title: "Error de sesión",
        message: "La sesión ha caducado. Por favor, inicie sesión de nuevo."
    }
}

export const credentialError = () => {
    return  {
        show: true, 
        severity: "error",
        title: "Error de sesión",
        message: "Usuario o contraseña incorrectos."
    }
}