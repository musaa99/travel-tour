import React from 'react'

const Tours = ({tours}) => {
  return (
  
    <React.Fragment>
      
    {tours.map((persons) =>{
        const {id, image, info , price, name, } = persons;
        return <article key={id} className="persons">
           
            <div className='main'>
            <img className='image' src={image} alt='png'/>
                <h4>{name}</h4>
                <p className='years'>{info} years</p>
                <p className='price'> ${price}</p>
            </div>
        </article>
    })}
</React.Fragment>
  )
}

export default Tours