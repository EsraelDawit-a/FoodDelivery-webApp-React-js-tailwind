import { ReactChild,FC } from 'react'

type Props = { 
    children:ReactChild| ReactChild[];
    className:string;
}


const Button:FC<Props> = ( { children,className } ) =>{
  return (
    <div className={ className }>
     { children }
    </div>
  )
}

 export default Button
