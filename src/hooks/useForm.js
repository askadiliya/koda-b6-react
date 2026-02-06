import { useState } from "react";

function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function resetForm() {
    setValues(initialValue);
  }

  return {
    values,
    handleChange,
    resetForm,
  };
}

export default useForm;
