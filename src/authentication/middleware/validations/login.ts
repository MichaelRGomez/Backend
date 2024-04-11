import Joi from "joi";

//RegEx
const passwordRegEx = new RegExp ("^$");

//TODO: add an .external to the username to see if the user is already active
export const loginJoiSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().regex(passwordRegEx).required().messages({
        'string.pattern.base': 'Password must have at least 8 characters, 1 UPPERCASE character, 1 number, 1 special character', // Custom error message for pattern failure
        'any.required': 'Password is required' // Custom error message for required field
      }),
})
