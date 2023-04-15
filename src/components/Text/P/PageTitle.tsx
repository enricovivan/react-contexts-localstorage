import { P } from "./P"

interface PageTitleProps {
    text ?: string,
}

export const PageTitle = (props:PageTitleProps) => {

    return (

        <div className="my-4">
            <P text={props.text} className="text-center font-light text-4xl"></P>
        </div>

    )

}