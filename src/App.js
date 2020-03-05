import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BearCard from './components/BearCard'
import BearList from './components/BearList'
import InputForm from './components/InputForm'
import { useSelector, useDispatch } from 'react-redux'

export default () => {

  
  const dispatch = useDispatch();

  const [formData, setData] = useState({
    name: '',
    weight: 0,
    img: ''
  });

  const { name, weight, img } = formData;

  const getBears = async () => {
    const result = await axios.get(`http://localhost/api/bears`)
    const action = { type: 'GET_BEARS', bears: result.data };
    dispatch(action)
  }

  const addBear = async () => {
    const result = await axios.post(`http://localhost/api/bears/`, {
      name,
      weight,
      img
    })
    console.log(result.data)
    getBears()
  }

  const deleteBear = async (id) => {
    const result = await axios.delete(`http://localhost/api/bears/${id}`)
    console.log(result.data)
    getBears()
  }

  const updateBear = async (id) => {
    console.log(name, weight, img);
    const result = await axios.put(`http://localhost/api/bears/${id}`, {
      name,
      weight,
      img
    })
    console.log('bear id update: ', result.data)
    getBears()
  }

  useEffect(() => {
    getBears()
  }, [])

  return (
    <div>
      <h2>Bears</h2>
      <BearList  deleteBear={deleteBear} updateBear={updateBear} />
      <InputForm  addBear={addBear} />
    </div>
  )
}