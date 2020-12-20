import React from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import AppTextInput from '../AppTextInput';
const AppFormField = ({name, width, ...otherProps}) => {
  const {setFieldValue, values, setFieldTouched, errors, touched} = useFormikContext();
  
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1)
  // console.log(capitalized)
  return (
    <>
      <AppTextInput
      width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[capitalized]} visible={touched[name]} />
    </>
  );
};
export default AppFormField;
