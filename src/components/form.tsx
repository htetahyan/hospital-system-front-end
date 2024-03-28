import React, {FC} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {Input, InputLabel} from "@mui/material";
import Button from "@mui/material/Button";


// Dynamically create Yup object schema
type Fields={
    name:'string'
    type:'select' | 'text' | 'email' | 'date'
    validation: Yup.StringSchema<string, Yup.AnyObject, undefined, "">
}&({
    type:'select',
    options:string[]
}|{
    type: 'text' | 'email' | 'date'
})
interface FormProps{
    isLoading:boolean
    initialValues:any;
    fields:Fields[]
    label?:string
    submitFunc:(val:any)=>void
}
export const ValidationSchemaExample:FC<FormProps> = ({isLoading,fields,initialValues,submitFunc,label}) => {
    const validationSchema = Yup.object().shape(
        fields.reduce((accumulator, field) => {
            // @ts-ignore
            accumulator[field.name] = field.validation;
            return accumulator;
        }, {})
    );
    return (
        <div className="w-fit h-fit p-8 bg-gray-200 dark:bg-gray-800 rounded-2xl">
            <h1 className="text-2xl font-bold mb-4">
                {label || 'Form'}
            </h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values,{resetForm})=> {
                   submitFunc(values)

                }}

            >
                {({errors, touched}) => (
                    <Form>
                        <div  className={'grid grid-cols-2 gap-5'}>
                        {fields.map(field => (
                            <div key={field.name} className="mb-4">
                                <InputLabel >
                                    {
                                        field.name
                                    }
                                </InputLabel>
                                {field?.type==='select' ? <Field
as={'select'}
                                    name={field.name}
                                    type={field.type}

                                    className="border border-gray-300 p-2 rounded-md w-full"
                                >
                                    {field.options?.map((menuItem,index)=><option key={index} value={menuItem}>{menuItem}</option>)}

                                </Field> :

                                    <Field

                                    name={field.name}
                                    type={field.type}

                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />}


                                <ErrorMessage
                                    render={msg => <div className="text-red-500 mt-1">{msg}</div>}
                                    name={field.name}
                                />
                            </div>
                        ))}</div>
                        <Button disabled={isLoading}   type="submit" className="bg-blue-500 text-white p-4  px-4 rounded-md hover:bg-blue-600">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default ValidationSchemaExample

