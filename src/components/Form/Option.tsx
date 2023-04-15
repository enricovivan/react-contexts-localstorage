interface OptionProps {
    value ?: string,
    children ?: any,
    selected ?: boolean
}

export const Option = (props:OptionProps) => {

    return (
        <option value={props.value} className="">

            {props.children}

        </option>
    )
}