import clsx from 'clsx';

function Button({ children, outline, className, ...rest }) {
  const classNames = clsx(
    {
      btn: true,
      'btn-accent': !outline,
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
