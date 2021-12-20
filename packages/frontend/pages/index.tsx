import React from 'react'
import {Footer} from '../components/footer/footer'

function Homepage() {
  return (
    <div>
      <h1 className="text-center my-24 font-black tracking-tight text-6xl">Placeholder text lol</h1>
      <div className="flex flex-row justify-center mb-20">
        <img className="object-top w-3/12" alt="Jennie Kim"
          src="https://user-images.githubusercontent.com/23220162/146834878-f3f9a2f8-c944-4087-859c-59fb687d739f.png"/>
      </div>
      <Footer/>
    </div>
  )
}
export default Homepage
