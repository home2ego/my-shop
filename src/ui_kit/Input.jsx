import clsx from 'clsx';

function Input(props) {
  const { placeholder, type = 'text', className, required, ...rest } = props;

  const classes = clsx({ input: true }, className);

  return (
    <label className="label">
      {placeholder}
      {required && <span className="input-required">*</span>}
      <div>
        <input type={type} className={classes} placeholder={placeholder} required={required} {...rest} />
      </div>
    </label>
  );
}

export default Input;
