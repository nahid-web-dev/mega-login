import React from 'react'
import { FaStar, FaUser } from 'react-icons/fa';

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'

const Cards = () => {
  const cards = [
    {
      name: "Laura",
      city: "Chicago",
      ageRange: "25-36",
      ethnicity: "Caucasian",
      imageUrl: image1,
      reviews: "72 Reviews",
      lastSeen: "Dec 2024",
      addedDate: "Dec 2024",
      username: "realtruthguy95190",
      userRank: "Noob EM user with 1 reviews",
    },
    {
      name: "Emma",
      city: "New York",
      ageRange: "20-30",
      ethnicity: "Asian",
      imageUrl: image2,
      reviews: "45 Reviews",
      lastSeen: "Nov 2024",
      addedDate: "Nov 2024",
      username: "honestEmma",
      userRank: "Trusted user with 10 reviews",
    },
    {
      name: "Sophia",
      city: "Los Angeles",
      ageRange: "22-32",
      ethnicity: "Hispanic",
      imageUrl: image3,
      reviews: "30 Reviews",
      lastSeen: "Oct 2024",
      addedDate: "Oct 2024",
      username: "laSophia",
      userRank: "Noob user with 3 reviews",
    },
    {
      name: "Isabella",
      city: "Miami",
      ageRange: "24-34",
      ethnicity: "Caucasian",
      imageUrl: image4,
      reviews: "25 Reviews",
      lastSeen: "Sep 2024",
      addedDate: "Sep 2024",
      username: "sunnyIsabella",
      userRank: "Expert user with 25 reviews",
    },
    {
      name: "Mia",
      city: "San Francisco",
      ageRange: "23-33",
      ethnicity: "African",
      imageUrl: image5,
      reviews: "80 Reviews",
      lastSeen: "Aug 2024",
      addedDate: "Aug 2024",
      username: "miaDreams",
      userRank: "Gold member with 50 reviews",
    },
    {
      name: "Ava",
      city: "Dallas",
      ageRange: "21-31",
      ethnicity: "Asian",
      imageUrl: image6,
      reviews: "60 Reviews",
      lastSeen: "Jul 2024",
      addedDate: "Jul 2024",
      username: "avaTruth",
      userRank: "Expert reviewer with 60 reviews",
    },
    {
      name: "Charlotte",
      city: "Houston",
      ageRange: "26-36",
      ethnicity: "Caucasian",
      imageUrl: image2,
      reviews: "90 Reviews",
      lastSeen: "Jun 2024",
      addedDate: "Jun 2024",
      username: "houstonChar",
      userRank: "Gold member with 80 reviews",
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-md overflow-hidden border border-gray-200"
        >
          {/* Header */}
          <div className="flex justify-between px-2 border-b border-gray-200">
            <div>
              <h3 className=" font-semibold">
                <a href="#" className="text-blue-500 hover:underline">
                  {card.name}
                </a>
              </h3>
              <p className="text-gray-500 text-sm">
                {card.city} - {card.ageRange} - {card.ethnicity}
              </p>
              <span className="text-gray-400 text-xs">
                Seen online: {card.lastSeen}
              </span>
            </div>
            <div className="text-right">
              <div>
                <a
                  href="#"
                  className="text-blue-500 text-sm hover:underline"
                >
                  {card.reviews}
                </a>
              </div>
              <div className="flex items-center text-yellow-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 pb-6 flex flex-row-reverse justify-between w-full items-center">
            <div className=' !w-32 !h-24 bg-gray-300'>
              <img
                href="#"
                className=" !h-full !w-full object-cover object-center"
                src={card.imageUrl}
              />
            </div>


            {/* Footer */}
            <div className="flex flex-col justify-between w-full p-4 border-t border-gray-200">
              <div>
                <span className="text-xs text-gray-500 mb-4">
                  Added: {card.addedDate}
                </span>
                <br />
                <span className="text-xs text-gray-500">
                  by:{" "}
                  <FaUser className="inline-block text-gray-400" title={card.userRank} />{" "}
                  <a
                    href="#"
                    className="text-blue-500 text-xs hover:underline"
                  >
                    {card.username}
                  </a>
                </span>
              </div>
              <a
                href="#"
                className=" font-semibold text-sm hover:underline bg-[#527888] mt-1 w-32 h-7 rounded-md text-white flex items-center justify-center  "
                title={card.name}
              >
                Read Full Review
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards