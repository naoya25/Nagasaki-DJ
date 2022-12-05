import React from 'react'
import img6 from '../images/image6.jpg'
import '../App.css'

const CardBox = ({pageName, description, snsurl1, snsname1, snsurl2, snsname2}) => {
  return (
    <div className="ContentCard p-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg text-center">
        <img
          id='card_image'
          class="w-full"
          src={img6}
          alt="Sunset in the mountains"
        ></img>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{pageName}</div>
          <p class="text-gray-700 text-base">
            {description}
          </p>
          <p class="text-gray-700 text-base">
            <a href={snsurl1} target='_blank'>→{snsname1}</a>
          </p>
          <p class="text-gray-700 text-base">
            <a href={snsurl2} target='_blank'>→{snsname2}</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardBox
