export const createValidatorSchema = {
    email:{
        isLength: {
            options:{
                min: 3,
                max: 20
            },
            errorMessage: "Numero de caracteres invalido"
        },
        notEmpty: {
            errorMessage: "email não pode estar vazio"
        },
        isString: {
            errorMessage: "O email não pode ser uma string"
        },
    }
}