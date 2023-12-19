import React, { useState } from 'react'
import * as CoreUI from '@coreui/react'
import logo from '../images/logo.png'
import './Header.css'

//Core UI imports
const {
  CForm,
  CFormInput,
  CButton,
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavLink,
} = CoreUI

function Header() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar
        expand="lg"
        colorScheme="light"
        className="bg-light"
        id="header-container"
      >
        <CContainer fluid id="container">
          <CNavbarBrand href="#">
            <img
              class="rounded-image"
              src={logo}
              alt=""
              width="100"
              height="100"
            />
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavLink href="#" active>
                Reservations
              </CNavLink>
              <CNavLink href="#" active>
                Rental Fleet
              </CNavLink>
              <CNavLink href="#" active>
                About Us
              </CNavLink>
              <CNavLink href="#" active>
                Contact
              </CNavLink>
            </CNavbarNav>
            <CForm className="d-flex ms-auto">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" id="search-button">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default Header
