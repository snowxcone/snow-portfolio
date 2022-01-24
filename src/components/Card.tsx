export const Card: React.FC<any> = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-30 w-full h-full rounded m-0 p-4 backdrop-blur-md shadow-lg">
      {children}
    </div>
  )
}