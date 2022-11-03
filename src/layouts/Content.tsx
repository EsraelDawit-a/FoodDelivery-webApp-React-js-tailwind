import React from 'react'
import { Hero } from './Hero'
import { About  } from './About'
import { Menue } from './Menue'
import { Comment } from './Comment'
import { GetStarted } from './GetStarted'




export function Content() {
  return (
    <div>
       <Hero/>
       <About/>
       <Menue/>
       <Comment/>
       <GetStarted/>
    </div>
  )
}

 