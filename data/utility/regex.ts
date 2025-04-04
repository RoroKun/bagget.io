
export const xssRegex = /[<>&\\]/

export const numbersRegex = /^[ 0-9-]+$/

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const phoneRegex = /^(\+?\d{1,2}?[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/