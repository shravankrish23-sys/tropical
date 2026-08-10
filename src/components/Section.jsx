import React from 'react';

export const Section = ({
  id,
  className = '',
  as: Component = 'section',
  children,
  ariaLabel,
  ...props
}) => {
  return (
    <Component
      id={id}
      className={className}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Component>
  );
};
