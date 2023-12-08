import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'

const QuizStore = () => {

    const navigate = useNavigate()

    const changeDir = (dir) =>{
        navigate(dir)
    }

  return (
    <div className='QuizStore'>
        <div className="text-3xl text-[green]">Quiz Store Page</div>
        <button className={`bg-[#3498db] p-[10px] text-[white] rounded-md hover:bg-[red] hover:text-[#4354f9]`} onClick={()=>{changeDir(ROUTES.Home)}}>Go Back To Home</button>
    </div>
  )
}

export default QuizStore