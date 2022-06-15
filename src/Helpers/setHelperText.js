export const setUserFirstNameHelperText = (code) => {
    switch (code) {
        case 0:
            return('');
        case 1:
            return('No dejar vacío')
        case 2:
            return('Nombre no válido')
    }
}

export const setUserLastNameHelperText = (code) => {
    switch (code) {
        case 0:
            return('');
        case 1:
            return('No dejar vacío')
        case 2:
            return('Apellido no válido')
    }
}

export const setUserAgeHelperText = (code) => {
    switch (code) {
        case 0:
            return('')
        case 1:
            return('Ingresar edad')
        case 2:
            return('Ingresa edad real')
        case 3:
            return('Para tener una cuenta debes ser mayor de edad')
    }
}

export const setUserEmailHelperText = (code) => {
    switch (code) {
        case 0:
            return('');
        case 1:
            return('No dejar vacío')
        case 2:
            return('E-Mail no válido')
    }
}

export const setUserPasswordHelperText = (code) => {
    switch (code) {
        case 0:
            return('');
        case 1:
            return('Ingresa de 8 a 13 caracteres')
        case 2:
            return('Ingresa al menos un número')
        case 3:
            return('Ingresa al menos una mayúscula')
    }
}

export const setPasswordMatchHelperText = (code) => {
    switch (code) {
        case 0:
            return('');
        case 1:
            return('Ingresa la contraseña')
        case 2:
            return('Por favor confirma la contraseña')
        case 3:
            return('Las contraseñas no coinciden')
    }
}