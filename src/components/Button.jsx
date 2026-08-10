import React from 'react';

export const Button = ({
  children,
  onClick,
  href,
  target,
  rel,
  className = '',
  id,
  type = 'button',
  ariaLabel,
  ...props
}) => {
  const combinedClassName = `btn ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        id={id}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      id={id}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};
