import React from 'react'
import {useFormikContext} from 'formik'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

const AppFormImagePicker = ({name}) => {
    const {errors, setFieldValue, touched, values} = useFormikContext()
    const imageUris = values[name]
    const onAddImage = (uri) => {
        setFieldValue(name, [...imageUris, uri])
   }
    const onRemoveImage = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
    }
    return(
        <React.Fragment>
            <ImageInputList imageUris={imageUris} onAddImage={onAddImage} onRemoveImage={onRemoveImage}/>
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </React.Fragment>
    )
}

export default AppFormImagePicker;