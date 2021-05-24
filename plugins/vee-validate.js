import { extend } from 'vee-validate'
import { required, email, alpha } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Dit veld is verplicht'
})

extend('email', {
  ...email,
  message: 'Dit veld moet een geldig email adres bevatten'
})

extend('min', {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ['length'],
  message: '{_field_} moet minimaal {length} letters bevatten'
})

extend('max', {
  validate(value, { length }) {
    return value.length <= length;
  },
  params: ['length'],
  message: '{_field_} mag maximaal {length} letter bevatten'
})

extend('phone', {
  validate(value) {
    const regex = /^((\+|00)?31|0(?!0))(\d{9})$/;
    return regex.test(value.replace(/\D/g, ''));
  },
  message: '{_field_} moet een geldig Nederlands nummer bevatten'
})

extend('required_if', {
  params: ['target'],
  validate(value, { target }) {
    if (value == '' || value === null || value === undefined) {
      return (target !== '' && target !== null && target !== undefined)
    }
    else {
      return (value !== '' && value !== null && value !== undefined)
    }
  },
  message: 'Email of telefoonnummer is verplicht'
})
