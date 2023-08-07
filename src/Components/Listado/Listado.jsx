import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Listado = () => {
  const navigate = useNavigate()
  const alert = withReactContent(Swal)
  
  useEffect(() => {
    if (!localStorage.getItem('login')) {
      alert.fire({
        title: 'Login failed!',
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          setTimeout(() => {
            Swal.getTimerLeft()
          }, 1000)
        },
        willClose: () => {
          clearInterval()
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          navigate("/")
        }
      })
    }
  }, [])
  
  return (
    <div>Listado</div>
    )
  }
  
  export default Listado