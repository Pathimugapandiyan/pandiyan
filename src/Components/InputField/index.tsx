import React, { ChangeEvent, useState } from "react";
import { InputText } from 'primereact/inputtext';
import './index.scss'
import { useFormik } from "formik"; 
interface InputProps {
  type: 'email' | 'name' | 'phoneNumber';
  value: string;
  name: string;
  onChange: (value: string) => void;
  onError: (error: string | null) => void;
}

const InputField: React.FC<InputProps> = ({ type, value, onChange,name,onError}) => {
 
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
   
    console.log(inputValue,"input"); 

    if (type === "email") {
      const isValidEmail = /\S+@\S+\.\S+/.test(inputValue);
      if (!isValidEmail) {
        setError("Type a valid Email ");
      } else {
        setError(null); 
      }
    } else if (type === 'name') {
      const isValidName = inputValue.length >= 4 && inputValue.length <= 15;
      if (!isValidName) {
        setError('Name must be between 4 and 15 characters');
      } else {
        setError(null); 
      }
    } else if (type === 'phoneNumber') {
      const isValidPhoneNumber = /^\+\d{1,3} \d{10}$/.test(inputValue);
      if (!isValidPhoneNumber) {
        setError('Use "+XX XXXXXXXXXX" format');
      } else {
        setError(null); 
      }
    }

    onError(error);
    onChange(inputValue);
    
  }

  
  

  return (
    <div className="overal_inputfield">
      {/* <label className="title">{type} :</label> */}
      <InputText 
      className="input_field"
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={`Enter ${type}`} 

      />
      {/* {error && <div className="error_mess">{error}</div>} */}
    </div>
  );
}

export default InputField;
