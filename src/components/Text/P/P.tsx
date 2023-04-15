interface PProps {
    text ?: string,
    className ?: string
}

export const P = (props:PProps) => {

    return (
        <p className={props.className}>{props.text}</p>
    )

}