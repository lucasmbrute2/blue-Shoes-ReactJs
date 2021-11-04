import "./SubmitButton.css"

export default function SubmitButton({ onClick, className, id , value}){
    return(
        <div>
            <input onClick={onClick} type='submit' className={'form-button'|| className} id={id} autoComplete={false} value={value||'Enviar'}></input>
        </div>
    )
}
