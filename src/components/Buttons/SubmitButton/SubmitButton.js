import "./SubmitButton.css"

export default function SubmitButton({ onClick, className, id , value}){
    return(
        <div>
            <input onClick={onClick} type='submit' className={className? className:'form-button'} id={id} autoComplete={false} value={value?value:'Enviar'}></input>
        </div>
    )
}
