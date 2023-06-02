import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../componenets'
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wht3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
"  />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title='Chatbots' text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " />
        <Feature title='knowledgebase' text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " />
        <Feature title='Education' text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. " />
       
      </div>
    </div>
  )
}

export default WhatGPT3