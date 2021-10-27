import * as React from 'react'

export const Button = React.forwardRef(
  ({ variant = 'primary', children, ...props }, ref) => {
    return (
      <button ref={ref} data-variant={variant}>
        {(buttonProps) => (
          <InnerButton {...buttonProps} {...props}>
            {children}
          </InnerButton>
        )}
      </button>
    )
  },
)
