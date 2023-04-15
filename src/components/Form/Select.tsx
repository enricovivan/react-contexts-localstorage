interface SelectProps {
    children ?: any,
    id: string,
    defaultValue ?: string

}

export const Select = (props:SelectProps) => {

    return (
        <div className="border border-black rounded-lg p-1">
            <select name={props.id} id={props.id} defaultValue={props.defaultValue} className="w-full h-full">
                {props.children}
            </select>
        </div>
    )

}