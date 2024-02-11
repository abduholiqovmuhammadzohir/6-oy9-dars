import axios from 'axios';
import React, { useEffect ,useState } from 'react'

export default function Card() {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + "posts")
      .then(res => {
        setDatas(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  })

  function handleClick(id) {
   let del = confirm("Haqiqatan ham o'chirmoqchimisiz")
   if (del) {
    const newItems = datas.filter((data) => data.id !== id);
    setDatas(newItems)
   }
  }

  return (
    <>
    <div className='header'>
    {
      datas.map((data,index) => {
        return (
          <div className='cards' key={index}>
            <h1>{data.id}</h1>
            <h1>{data.title}</h1>
            <h1>{data.views}</h1>
            <button onClick={() => handleClick(data.id)} className='card-btn'>delete</button>
          </div>
        )
      })
    }
    </div>
    </>    
  )
}
