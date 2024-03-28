import * as Yup from "yup";

export const patientInitialValues = {
    name:'',
    gender:'',
    phoneNumber:'',
    email:'',
    bloodType:'',
    birthDate:'',
    address:''
}

const defaultValidation = (type:string) => {
    if (['phone', 'email'].includes(type)) {
        switch (type) {
            case 'phone':
                return Yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('phone number is required');
            case 'email':
                return Yup.string().email('Invalid email').required('email is required');
        }
    }
    // You might want to return a default validation or throw an error if the type is not supported

};

export const patientFields = [
    { name: 'name', validation: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'), type: 'text' },
    { name: 'gender', validation: Yup.string().min(1,'please select').required('Required'), type: 'select' ,options: ['','male','female']},
    { name: 'phoneNumber', validation: defaultValidation('phone'), type: 'text' },
    { name: 'email', validation: defaultValidation('email'), type: 'email' },
    { name: 'bloodType', validation: Yup.string().min(1,'please select').required('Required'), type: 'select',options:['','o','a'] },
    { name: 'birthDate', validation: Yup.date().required('Required'), type: 'date' },
    { name: 'address', validation: Yup.string().required('Required'), type: 'text' }
];
