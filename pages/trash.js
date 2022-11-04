import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import SmallCalendar from "../Components/SmallCalendar/SmallCalendar"
import { SampleData } from "../store/reducer/sampleReducer"
const useValidate = (value,validations) =>{
    const [isEmpty,setEmpty] = useState(true)
    const [minLengthError,setMinLengthError] = useState(false)
    useEffect(()=>{
        for (let validation in validations) {
            switch(validation){
                case 'minLength':
                    value.length<validations[validation]?setMinLengthError(true):setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value?setEmpty(false):setEmpty(true)
                    break;
                default:
            }
            
        }
    },[value])
    return {
        isEmpty,
        minLengthError
    }
}
const useInput = (initialValue,validations) =>{
    const [value,setValue] = useState(initialValue)
    const [isDirty,setDirty] = useState(false)
    const valid = useValidate(value,validations)
    const onChange = event =>{
        setValue(event.target.value)
    }
    const onBlur = event =>{
        setDirty(true)
    }
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}
function Trash(){
    const input = useInput('',{isEmpty:true,minLength:3})
return <div>
    <input type={'text'} onBlur={e=>input.onBlur(e)} value={input.value} onChange={e=>input.onChange(e)}/>
    <h1>{input.isEmpty&&input.isDirty?'Error':null}</h1>{console.log(input)}
</div>
}
export default Trash