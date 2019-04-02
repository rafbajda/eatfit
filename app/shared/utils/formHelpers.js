/* eslint-disable import/prefer-default-export */
export const checkBoxSetter = (props, fieldName) => {
    props.setFieldValue(fieldName, !props.values[fieldName]);
    props.setFieldTouched(fieldName, true);
};
