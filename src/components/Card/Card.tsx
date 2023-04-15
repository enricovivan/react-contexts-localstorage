interface CardProps {
    className ?: string,
    children ?: any
}

export const Card = (props:CardProps) => {

    return (

        <div className={props.className}>
            <div className="p-5 border shadow-xl rounded-lg h-full">
                {props.children}
            </div>
        </div>
        

    )

}