import React from 'react'
import {Formik} from 'formik'
const AppForm = ({initialValues, onSubmit, children, validationSchema}) => {
    console.log(validationSchema)
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => 
                <>
                {children}
                </>
            }
        </Formik>
    )
}
export default AppForm