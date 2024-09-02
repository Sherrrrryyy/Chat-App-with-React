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
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <h1>HOME PAGE</h1>
</div>
    </>
)

}

export default Home