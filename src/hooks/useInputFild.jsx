import { useState } from "react";

const useInputFild = (defaultValue) => {
    const [inputValue, setInputValue] = useState(defaultValue)

    const handleInputField = e => {
        setInputValue(e.target.value)
        console.log(e.target.value);
        
    }
    return [inputValue, handleInputField] 
};

export default useInputFild;