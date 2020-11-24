import React from 'react'
import {Formik} from 'formik'

const AppForm = ({initialValues, onSubmit, children, validationSchema}) => {
    return(
        <Formik>
            {
                () => {
                    <>
                        {children}
                    </>
                }
            }
        </Formik>
    )
}
export default AppForm;