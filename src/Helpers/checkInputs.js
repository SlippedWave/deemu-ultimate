export const checkUserFirstName = (userFirstName) => {
    if (userFirstName) {
        const res = (/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/.test(userFirstName));
        return (
            res ? 0 : 2
        )
    }
    return 1;
}

export const checkUserLastName = (userLastName) => {
    if (userLastName) {
        const res = (/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/.test(userLastName));
        return (
            res ? 0 : 2
        )
    }
    return 1;
}

export const checkUserAge = (userAge) => {
    if (userAge) {
        if (userAge >= 18 && userAge <= 120) {
            return 0;
        } else if (userAge > 120) {
            return 2;
        } else { //Menor de edad
            return 3;
        }
    }
    return 1;
}

export const checkUserEmail = (userEmail) => {
    if (userEmail) {
        const res = (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(userEmail));
        return (
            res ? 0 : 2
        )
    }
    return 1;
}

export const checkUserPassword = (userPassword) => {
    if (userPassword) {
        if (userPassword.length > 7 && userPassword.length < 13) {
            if (userPassword.match(/[0-9]/)) {
                if (userPassword.match(/[A-Z]/)) {
                    return 0; //todo bien
                } else {
                    return 3; //faltan mayusculas
                }
            } else {
                return 2; //falta un numero
            }
        } else {
            return 1;  //faltan caracteres
        }
    }
    return 1;
}

///0 todo bien, 1 falta p1; 2 falta p2; 3 no son iguales
export const checkPasswordMatch = (pass1, pass2) => {
    if (pass1 && pass2) {
        return (pass1 === pass2 ? 0 : 3);
    }
    return (pass1 ? 2 : 1)
}
