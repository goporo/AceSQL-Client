import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import UiButton from 'components/common/ui/UiButton/UiButton'
import UiImage from 'components/common/ui/UiImage/UiImage'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoItemFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-12 items-center justify-center h-[calc(100vh-162px)] ">
      <div className="text-center flex flex-col items-center">
        <img width={240} height={222} src={"/assets/images/no_item.png"} alt='box' />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          No Item Found
        </h2>
        <p className="text-lg text-gray-600">
          Sorry, the list item is empty or the content you are looking for does not exist.
        </p>
      </div>
      <UiButton
        icon={faArrowLeft}
        className="h-[46px] gap-2 rounded-full min-w-[260px] bg-primary text-white px-10"
        onClick={() => navigate(-1)}
      >
        Back to previous page
      </UiButton>
    </div>
  )
}

export default NoItemFound
