import React from 'react'

const testFunc = function (value:string): void{
    console.log('Hello World')
    console.log(value)
  }
    

const Button = (props: any) => {
    const { buttonText} = props;
    return (
        <div>
            <button onClick={()=>testFunc('Pepis')}>{buttonText}</button>
        </div>
    )
}

export default Button
