import * as React from 'react'


export const Actions = ({  ref, ...props }) => {
    console.log(props)
    console.log(ref);
    return (

        <button
        
        >

        </button>

    )
}

/*
export const Actions = React.forwardRef(
    ({ variant = 'primary', children, ...props }, ref) => {
        console.log(ref);
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
   */