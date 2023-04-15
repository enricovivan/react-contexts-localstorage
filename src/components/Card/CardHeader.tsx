import { P } from "../Text/P/P"

interface CardHeaderProps {
    text ?: string,
}

export const CardHeader = (props:CardHeaderProps) => {

    return (
        <div>
            <P text={props.text} className='text-center font-semibold'></P>
            <hr className="mb-4 mt-2"/>
        </div>
    )

}