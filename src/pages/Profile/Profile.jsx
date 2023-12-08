import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'

const Profile = () => {

    const navigate = useNavigate()

    const changeDir = (dir) =>{
        navigate(dir)
    }

  return (
    <div className='Profile'>
        <div className="text-3xl text-[green]">Profile Page</div>
        <button className={`bg-[#3498db] p-[10px] text-[white] rounded-md hover:bg-[red] hover:text-[white]`} onClick={()=>{changeDir(ROUTES.Home)}}>Go Back To Home</button>
    </div>
  )
}

export default Profile