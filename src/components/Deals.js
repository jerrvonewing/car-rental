import React from 'react'
import * as CoreUI from '@coreui/react'
import dealsImg1 from '../images/deals1.jpeg'
import dealsImg2 from '../images/deals2.jpeg'
import dealsImg3 from '../images/deals3.jpeg'
import './Deals.css'

//Core UI imports
const { CButton, CCarousel, CCarouselItem, CImage, CCarouselCaption } = CoreUI

function Deals() {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={dealsImg1} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>First slide label</h5>
          <div className="d-grid gap-2">
            <CButton color="primary" id="deals-button">
              Button
            </CButton>
          </div>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={dealsImg2} alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Second slide label</h5>
          <div className="d-grid gap-2">
            <CButton color="primary" id="deals-button">
              Button
            </CButton>
          </div>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={dealsImg3} alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Third slide label</h5>
          <div className="d-grid gap-2">
            <CButton color="primary" id="deals-button">
              Button
            </CButton>
          </div>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  )
}

export default Deals
