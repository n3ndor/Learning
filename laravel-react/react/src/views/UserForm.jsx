import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axiosClient from "../axios-client"
import { useStateContext } from "../contexts/ContextProvider"

export default function Userform() {
  
  let {id} = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const {setNotification} = useStateContext()
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  if (id){
    useEffect(()=>{
      setLoading(true)
      axiosClient.get(`/users/${id}`)
        .then(({data})=>{
          setLoading(false)
          setUser(data);
        })
        .catch(()=>{
          setLoading(false);
        })
    }, [])
  }

  const onSubmit = ev => {
    ev.preventDefault()
    if (user.id) {
      axiosClient.put(`/users/${user.id}`, user)
        .then(()=>{
          //TODO show notification
          setNotification("User was successfully updated")
          navigate('/users')
        })
        .catch(err =>{
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    } else {
      axiosClient.post(`/users`, user)
      .then(()=>{
        setNotification("User was successfully created")
        navigate('/users')
      })
      .catch(err =>{
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
    }
  }

  return(
    <>
    {user.id && <h2>Update User: {user.name}</h2>}
    {!user.id && <h2>New User</h2>}
    <div className="card animated fadeInDown">
      {loading && (
        <div className="text-center">Loading ...</div>
      )}
      {errors && <div className="text-center">
        {Object.keys(errors).map(key=>(
          <p key={key}>{errors[key][0]}</p>
        ))}
      </div>
      }
      {!loading && 
        <form onSubmit={onSubmit}>
          <input onChange={ev=>setUser({...user, name: ev.target.value})} value={user.name} placeholder="Name" />
          <input onChange={ev=>setUser({...user, email: ev.target.value})} value={user.email} placeholder="Email" type="email"/>
          <input onChange={ev=>setUser({...user, password: ev.target.value})} placeholder="Password" type="password"/>
          <input onChange={ev=>setUser({...user, password_confirmation: ev.target.value})} placeholder="Password Confirmation" type="password"/>
          <button className="btn">Save</button>
          
        </form>
      }

    </div>
  </>
  ) 
};
