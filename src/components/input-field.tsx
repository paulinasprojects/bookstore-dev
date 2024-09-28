import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  placeholer?: string;
  type?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
}

const InputField = <T extends FieldValues> ({ placeholer, type, register, name, defaultValue, error, inputProps, className }: InputFieldProps<T>) => {
  return (
    <div className=''>
      <input
        className={className} 
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

export default InputField