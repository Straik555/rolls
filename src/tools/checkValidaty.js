export const checkValidaty = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid;
    }
    if (rules.isPhone) {
        const pattern1 = /^\d{10,12}$/;
        const pattern2 = /^\+\d{10,12}$/
        //const pattern3 = /^\+?3?8?(0\d{9})$/;
        isValid = (pattern1.test(value) || pattern2.test(value)) && isValid;
        //isValid = pattern3.test(value) && isValid;
    }

    return isValid;
};