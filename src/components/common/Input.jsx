import { useState } from 'react'
export default function Input({ label, type, value, onChange, className, error}) {
    const [inputValue, setInputValue] = useState(value)
    
    const handleChange = (e) => {
        setInputValue(e.target.value)
        onChange(e.target.value)
    }

  return (
    <div className={`flex flex-col ${className}`}>
        <label htmlFor={label} className='text-left text-white-700 opacity-50 pl-1'>{label}:</label>
        <input type={type} placeholder={label} value={inputValue} onChange={handleChange} className={`p-2 px-4 bg-neutral-800 border border-neutral-700 rounded-lg text-white ${error && 'border border-red-800'}`}/>
    </div>
  )
}
