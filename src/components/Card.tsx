import { useState } from "react"

export const Card = (props: { title?: string, children: JSX.Element }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className='flex justify-center p-4'
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <div className="flex flex-col bg-gray-300 w-60 h-80 rounded overflow-hidden shadow-lg hover:shadow-2xl">
        <div>{props.title}</div>
        {props.children}
      </div>
    </div >
  )
}