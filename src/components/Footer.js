import React from 'react'
import * as CoreUI from '@coreui/react'
import './Footer.css'

//Core UI imports
const { CFooter, CLink } = CoreUI

function Footer() {
  return (
    <CFooter id="footer-container">
      <div>
        <CLink href="https://github.com/jerrvonewing/car-rental">
          Jerrvon Ewing
        </CLink>
        <span>&copy; 2023 creativeLabs.</span>
      </div>
      <div>
        <span>Powered by </span>
        <CLink href="https://github.com/jerrvonewing/car-rental">
          Jerrvon Ewing
        </CLink>
      </div>
    </CFooter>
  )
}

export default Footer
