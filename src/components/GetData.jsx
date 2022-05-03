import { useState } from "react"

const GetData = props => {

    const [title, setTitle] = useState('')

    const saveInputValueHandler = (e) => {
        setTitle (e.target.value)
    }


    const [title2, setTitle2] = useState({value: ''})
    const saveInputValueHandler2 = (e) => {
        setTitle2 ({
            value: e.target.value,
        })
        // console.log(title2);
    }


    const [title3, setTitle3] = useState('')
    const saveInputValueHandler3 = (e) => {
        setTitle3 ((prev) => 
        {
            prev=e.target.value
            return prev
        })
        // console.log(title3);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const obj ={
            id: Math.random().toString(),
            text: title,
            text2: title2.value,
            text3: title3
        }
        // console.log(obj);
        props.onAddInpValToList(obj)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" onChange={saveInputValueHandler} value={title}/>
            <input type="text" onChange={saveInputValueHandler2} value={title2.value}/>
            <input type="text" onChange={saveInputValueHandler3} value={title3}/>
            <button>add</button>
        
            

        </form>
    )
}

export default GetData