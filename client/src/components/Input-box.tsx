interface propType{
    styles?:React.CSSProperties;
    type:string;
    name:string;
    label?:string;
    classType:string
    id?:string
    
}

interface RadioType extends propType{
    radioHeight?:React.CSSProperties
}

const Input=(props:propType)=>{
    return(
        <div className={props.classType}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} style={props.styles} name={props.name} id={props.id}/>
        </div>
    )
}

const RadioButton=(props:RadioType)=>{
    return(
        <div className={props.classType}>
            <input type={props.type} style={props.radioHeight} name={props.name} id={props.id}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}
export {Input,RadioButton}