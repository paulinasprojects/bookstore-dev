import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface FormInputFieldProps<T extends FieldValues> {
  placeholer?: string;
  type?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const FormInputField = <T extends FieldValues> ({ placeholer, type, register, name, defaultValue, error, inputProps }: FormInputFieldProps<T>) => {
  return (
    <div className=''>
      <input
        className='login-modal-input' 
        placeholder={placeholer}
        type={type}
        {...register(name)}
        {...inputProps}
        defaultValue={defaultValue}
       />
       {error?.message && (
        <p className='error-message'>{error?.message.toString()}</p>
       )}
    </div>
  );
};

export default FormInputField