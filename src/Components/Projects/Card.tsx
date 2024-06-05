import './projects.scss'
import React from 'react';

interface CardProps {
  heading: string | null;
  backgroundColor: string | null;
  backgroundImage: string | null;
  tag: string[] | null;
}
const Card: React.FC<CardProps> = ({heading,backgroundColor,tag,backgroundImage}) => {
  // const tags = ;
  return (
    <div className='card' >
      <div className="card-heading">
        <div className="dot"></div>
        <p>{heading}</p>
      </div>
      <div className="card-body">
        <div className="card-body-child"  style={{backgroundColor:`${backgroundColor}`}}>
          <img src={backgroundImage ?? ''} alt="This Is Image" />
        </div>
      </div>
      <div className="card-tags">
        {tag?.map((item:string,index:number)=>{
          return (
            <p key={index}>{item}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Card
