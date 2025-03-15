import React from 'react';
import { Link } from 'react-router-dom';

// Importing Images
import image1 from '../../assets/Kirti Suri.jpeg';
import image2 from '../../assets/prithi.jpg';
import image3 from '../../assets/rachana.jpg';
import image4 from '../../assets/nisary.jpg';
import image5 from '../../assets/Ratnasri.png';
import image6 from '../../assets/Hena.jpg';
import image7 from '../../assets/Nipa.jpg';
import image8 from '../../assets/priyasharma.jpg';

function Community() {
  return (
    <div className="bg-gray-700 z-[99] text-white p-5 overflow-hidden">
      {/* Heading */}
      <h1 className="text-3xl mb-10 text-center mt-12 bg-gradient-to-br from-green-400 to-blue-600 text-transparent bg-clip-text font-extrabold tracking-wide drop-shadow-lg">
        Community Room
      </h1>

      {/* Cards Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-5">
        
        {/* Card 1 */}
        <div className="card h-[400px] w-full sm:w-[250px] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-6 text-center flex flex-col items-center mx-auto">
          <div className="h-[230px] w-full rounded-xl overflow-hidden">
            <img src={image1} className="rounded-xl h-[230px] w-full object-cover" alt="Kirti Suri" />
          </div>
          <h1 className="text-[18px] font-semibold mt-6">Kirti Suri</h1>
          <p className="text-[14px] text-gray-300">Financial Coach</p>
          <Link to="/Profile">
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 mt-6">
              Know More about Her
            </button>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="card h-[400px] w-full sm:w-[250px] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-6 text-center flex flex-col items-center mx-auto">
          <div className="h-[230px] w-full rounded-xl overflow-hidden">
            <img src={image2} className="rounded-xl h-[230px] w-full object-cover" alt="Prithi Rathi Gupta" />
          </div>
          <h1 className="text-[18px] font-semibold mt-6">Prithi Rathi Gupta</h1>
          <p className="text-[14px] text-gray-300">Managing Director, Anand Rathi Share</p>
          <Link to="/Profile">
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 mt-6">
              Know More about Her
            </button>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="card h-[400px] w-full sm:w-[250px] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-6 text-center flex flex-col items-center mx-auto">
          <div className="h-[230px] w-full rounded-xl overflow-hidden">
            <img src={image3} className="rounded-xl h-[230px] w-full object-cover" alt="Rachana Phadke" />
          </div>
          <h1 className="text-[18px] font-semibold mt-6">Rachana Phadke</h1>
          <p className="text-[14px] text-gray-300">Chartered Accountant</p>
          <Link to="/Profile">
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 mt-6">
              Know More about Her
            </button>
          </Link>
        </div>

        {/* Card 4 */}
        <div className="card h-[400px] w-full sm:w-[250px] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-6 text-center flex flex-col items-center mx-auto">
          <div className="h-[230px] w-full rounded-xl overflow-hidden">
            <img src={image4} className="rounded-xl h-[230px] w-full object-cover" alt="Nisary Mahesh" />
          </div>
          <h1 className="text-[18px] font-semibold mt-6">Nisary Mahesh</h1>
          <p className="text-[14px] text-gray-300">Founder, Her Money Talks</p>
          <Link to="/Profile">
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 mt-6">
              Know More about Her
            </button>
          </Link>
        </div>

        {/* Card 5 */}
        <div className="card h-[400px] w-full sm:w-[250px] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-6 text-center flex flex-col items-center mx-auto">
          <div className="h-[230px] w-full rounded-xl overflow-hidden">
            <img src={image5} className="rounded-xl h-[230px] w-full object-cover" alt="Ratnasari Karra" />
          </div>
          <h1 className="text-[18px] font-semibold mt-6">Ratnasari Karra</h1>
          <p className="text-[14px] text-gray-300">Investment Advisor</p>
          <Link to="/Profile">
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 mt-6">
              Know More about Her
            </button>
          </Link>
        </div>

        {/* Card 6 */}
        <div className="card h-[400px] w-full sm:w-[250px] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-6 text-center flex flex-col items-center mx-auto">
          <div className="h-[230px] w-full rounded-xl overflow-hidden">
            <img src={image6} className="rounded-xl h-[230px] w-full object-cover" alt="Hena Mehta" />
          </div>
          <h1 className="text-[18px] font-semibold mt-6">Hena Mehta</h1>
          <p className="text-[14px] text-gray-300">Founder & CEO, Basis</p>
          <Link to="/Profile">
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 mt-6">
              Know More about Her
            </button>
          </Link>
        </div>

        {/* Card 7 */}
        <div className="card h-[400px] w-full sm:w-[250px] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-6 text-center flex flex-col items-center mx-auto">
        <div className="h-[230px] w-full rounded-xl overflow-hidden">
            <img src={image7} className="rounded-xl h-[230px] w-full object-cover" alt="Hena Mehta" />
          </div>
          <h1 className="text-[18px] font-semibold mt-6">Nipa Shet</h1>
          <p className="text-[14px] text-gray-300">Founder, Trust Capital</p>
          <Link to="/Profile">
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 mt-6">
              Know More about Her
            </button>
          </Link>
        </div>

        {/* Card 8 */}
        <div className="card h-[400px] w-full sm:w-[250px] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-6 text-center flex flex-col items-center mx-auto">
        <div className="h-[230px] w-full rounded-xl overflow-hidden">
            <img src={image8} className="rounded-xl h-[230px] w-full object-cover" alt="Hena Mehta" />
          </div>
          <h1 className="text-[18px] font-semibold mt-6">Priya Sharma</h1>
          <p className="text-[14px] text-gray-300">CoFounder, Zest Money</p>
          <Link to="/Profile">
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 mt-6">
              Know More about Her
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Community;
