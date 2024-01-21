const validate = (data) => {
    let errors = {};

    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    const passwordValid = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if (!validEmail.test(data.email)) {
        errors.email = 'Ingrese un Email válido';
    }

    if (!passwordValid.test(data.password)) {
        errors.password = "Contraseña inválida";
    }

    return errors;
}


export default validate;