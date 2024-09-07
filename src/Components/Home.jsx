const Home = ()=>{





  

return(
    <>
    <div>
<nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          M. Shaheer Khan
        </div>

        <ul className="flex space-x-4">
          <li>
            <a
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Chat
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Location
            </a>
          </li>
        </ul>
      </div>
    </nav>
</div>
    </>
)

}

export default Home