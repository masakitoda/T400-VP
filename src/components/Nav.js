import React from 'react'

//import navigation data
import { navigationData } from '../data';

const Nav = () => {
  return (
   <nav>
     <ul className='flex gap-x-8 items-end'>
       {navigationData.map((item, index) => {
        return(
          <li key={index}>
           <a href={`#${item.id}`}>{item.name}</a>
          </li>
        )
       })}
     </ul>
   </nav>
  )
}

export default Nav;