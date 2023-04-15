interface CheckboxProps {
    name ?: string,
    label ?: string
}

export const Checkbox = (props:CheckboxProps) => {

    return (
        <div>
            <input type="checkbox" name={props.name} id={props.name} />
            <label className="ms-2" htmlFor={props.name}>{props.label}</label>
        </div>
        
    )

}