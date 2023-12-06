import {useState} from "react"


export const AddCategories = ({onNewCategory}) => {

      const [inputValue, setInputValue] = useState('')

      const onInputChange = (event)=>{
          setInputValue(event.target.value)
          
      }
      
      const onSubmit = (event)=>{
        event.preventDefault()
        if ( inputValue.trim().length <=1) return 
        // setCategories(categories => [...categories, inputValue])
        onNewCategory(inputValue.trim())
        setInputValue('')
      }

      return (
            <form onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
            />
            </form>
    )
}