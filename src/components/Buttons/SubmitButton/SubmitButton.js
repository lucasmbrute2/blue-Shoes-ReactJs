import "./SubmitButton.css"

export default function SubmitButton({ onClick, className, id }){
    return(
        <div>
            <input onClick={onClick} type='submit' className={'form-button'|| className} id={id} autoComplete={false}></input>
        </div>
    )
}
