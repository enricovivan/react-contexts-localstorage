
interface InputLabelProps {
    text ?: string,
    for: string,
    className ?: string
}

export const InputLabel = (props:InputLabelProps) => {

    return (

        <div className={props.className}>
            <label htmlFor={props.for}>{props.text}</label>
        </div>

    )

}