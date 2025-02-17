import React from 'react'
import image from '../assets/image.jpg'

const About = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>About Me</h1>
      <h2 style={{textAlign:'center'}}>My name is Jack</h2>
      <h3 style={{textAlign:'justify', margin:'0 50px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste laboriosam dolorem quaerat, ullam praesentium! Reprehenderit aut, dicta rem magni reiciendis impedit aliquid repudiandae unde quia nulla nam mollitia tempora.</h3>
      <img src={image} alt='image' style={{width:'100%', height:'auto'}} />
    </div>
  )
}

export default About
