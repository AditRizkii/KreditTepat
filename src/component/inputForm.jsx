import React from 'react';

function InputForm(props) {
  return (
    <div className="flex flex-col gap-2 caret-slate-700  font-poppins text-xl font-thin ">
      <label htmlFor="">{props.label}</label>
      <input
        type="text"
        placeholder={props.isiInpu}
        className="bg-gray-600 rounded-md h-8 border-red-100 placeholder:text-lg   pl-2 focus:outline-gray-800"
      />
    </div>
  );
}

export default InputForm;
