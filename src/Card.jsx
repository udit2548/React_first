import React from 'react'
import Heading from './Heading'
import Images from './Images'

function Card(props) {
    console.log(props)
    return (
      <>
        <div className="cards">
          <div className="card">
            <Images imgscr={props.imgscr} />
            <div className="class_info">
              <span className="card_category">{props.title}</span>
              <Heading sname={props.sname}></Heading>
              <a href={props.link} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
  
        </div>
      </>
  
  
  
    )
  }

export default Card