 const FormInput = ({label, ...otherProps}) => {
    return (
        <div>
        <labe>{label}</labe>
        <input 
            type={"text"}
            {...otherProps}
        />
        </div>
    )
}

export default FormInput;
