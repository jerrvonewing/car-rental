import React, { useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import './RentalForm.css'

const FormContainer = styled.div`
  max-width: auto;
  margin: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  background-color: lightgray;
  border: 2px solid;
  border-color: rgb(0, 37, 185);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  label {
    display: block;
    margin-bottom: 5px;
  }
`

const RentalForm = () => {
  const [pickupCity, setPickupCity] = useState(null)
  const [returnCity, setReturnCity] = useState(null)
  const [pickupDate, setPickupDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)

  const handleCityChange = (selectedOption, action) => {
    if (action.name === 'pickupCity') {
      setPickupCity(selectedOption)
    } else if (action.name === 'returnCity') {
      setReturnCity(selectedOption)
    }
  }

  const handleDateChange = (date, name) => {
    if (name === 'pickupDate') {
      setPickupDate(date)
    } else if (name === 'returnDate') {
      setReturnDate(date)
    }
  }

  return (
    <FormContainer>
      <div>
        <FormGroup>
          <label>Pickup City:</label>
          <Select
            name="pickupCity"
            value={pickupCity}
            onChange={handleCityChange}
            options={[
              { value: 'Chicago', label: 'Chicago' },
              { value: 'New York', label: 'New York' },
              { value: 'Los Angeles', label: 'Los Angeles' },
              // Add more city options as needed
            ]}
          />
        </FormGroup>
        <FormGroup>
          <label>Pickup Date and Time:</label>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => handleDateChange(date, 'pickupDate')}
            showTimeSelect
            dateFormat="Pp"
          />
        </FormGroup>
      </div>
      <div>
        <FormGroup>
          <label>Return City:</label>
          <Select
            name="returnCity"
            value={returnCity}
            onChange={handleCityChange}
            options={[
              { value: 'Chicago', label: 'Chicago' },
              { value: 'New York', label: 'New York' },
              { value: 'Los Angeles', label: 'Los Angeles' },
            ]}
          />
        </FormGroup>
        <FormGroup>
          <label>Return Date and Time:</label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => handleDateChange(date, 'returnDate')}
            showTimeSelect
            dateFormat="Pp"
          />
        </FormGroup>
      </div>
      {/* Add a submit button or any additional UI elements as needed */}
    </FormContainer>
  )
}

export default RentalForm
