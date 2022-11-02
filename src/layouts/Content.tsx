import React from 'react'
import { Hero } from './Hero'
import { About  } from './About'
import { Menue } from './Menue'
import { Comment } from './Comment'




export function Content() {
  return (
    <div>
       <Hero/>
       <About/>
       <Menue/>
       <Comment/>
    </div>
  )
}

 