interface LiHeaderProps {
    text ?: string,
    onClick ?: ()=>void,
    hoverColor ?: string,
    className ?: string,
}

export const LiHeader = (props:LiHeaderProps) => {

    return (
        <li className={props.className}><a className={`hover:${props.hoverColor} hover:underline hover:cursor-pointer`} onClick={props.onClick}>{props.text}</a></li>
    )

}