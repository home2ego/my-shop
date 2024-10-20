import clsx from 'clsx';

function Button(props) {
  const { children, outline, className, ...rest } = props;

  const classNames = clsx(
    {
      btn: true,
      'btn-outline': outline,
    },
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}

export default Button;
