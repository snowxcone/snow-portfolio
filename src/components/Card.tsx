export const Card: React.FC<any> = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-30 w-96 h-48 rounded m-2 backdrop-blur-md shadow-lg">
      {children}
    </div>
  )
}