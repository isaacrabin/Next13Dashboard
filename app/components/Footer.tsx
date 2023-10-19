
const Footer = ({...props}) => {
  return (
    <footer className="bg-gray-200 text-gray-500 mt-5 p-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>        
          <p>All rights reserved</p>
        </div>
        <div>        
          <p>RabinInc@2023</p>
        </div>
        <div>        
          <ul className="flex space-x-4">       
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Admin Portal</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
