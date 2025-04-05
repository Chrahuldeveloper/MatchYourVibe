import React from "react";
import "./App.css";
import { FaMusic } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";

export default function App() {


  const rooms = [
    {
      tittle: "Dancing Queen",
      singer: "ABBA",
      image: "https://placehold.co/400x400/9333ea/ffffff?text=Dancing+Queen",
      dute1: "https://placehold.co/100/9333ea/ffffff?text=Alex",
      dute2: "https://placehold.co/100/9333ea/ffffff?text=Alex",
    },
    {
      tittle: "Dancing Queen",
      singer: "ABBA",
      image: "https://placehold.co/400x400/9333ea/ffffff?text=Dancing+Queen",
      dute1: "https://placehold.co/100/9333ea/ffffff?text=Alex",
      dute2: "https://placehold.co/100/9333ea/ffffff?text=Alex",
    },
    {
      tittle: "Dancing Queen",
      singer: "ABBA",
      image: "https://placehold.co/400x400/9333ea/ffffff?text=Dancing+Queen",
      dute1: "https://placehold.co/100/9333ea/ffffff?text=Alex",
      dute2: "https://placehold.co/100/9333ea/ffffff?text=Alex",
    },
    {
      tittle: "Dancing Queen",
      singer: "ABBA",
      image: "https://placehold.co/400x400/9333ea/ffffff?text=Dancing+Queen",
      dute1: "https://placehold.co/100/9333ea/ffffff?text=Alex",
      dute2: "https://placehold.co/100/9333ea/ffffff?text=Alex",
    },
    {
      tittle: "Dancing Queen",
      singer: "ABBA",
      image: "https://placehold.co/400x400/9333ea/ffffff?text=Dancing+Queen",
      dute1: "https://placehold.co/100/9333ea/ffffff?text=Alex",
      dute2: "https://placehold.co/100/9333ea/ffffff?text=Alex",
    },
    {
      tittle: "Dancing Queen",
      singer: "ABBA",
      image: "https://placehold.co/400x400/9333ea/ffffff?text=Dancing+Queen",
      dute1: "https://placehold.co/100/9333ea/ffffff?text=Alex",
      dute2: "https://placehold.co/100/9333ea/ffffff?text=Alex",
    },
  ];

  return (
    <>
      <nav className="flex items-center p-4 bg-transparent border rounded-lg shadow-lg backdrop-blur-lg border-white/20 justify-evenly">
        <div>
          <div className="flex items-center space-x-3">
            <FaMusic
              size={35}
              color="white"
              className="p-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-pink-700"
            />
            <h1 className="text-xl font-bold">
              Sing<span className="text-pink-500">Along</span>
            </h1>
          </div>
        </div>

        <div>
          <ul className="flex items-center space-x-8 text-sm">
            <li className="font-semibold transition-colors duration-500 ease-in-out cursor-pointer hover:text-purple-500">
              Home
            </li>
            <li className="font-semibold transition-colors duration-500 ease-in-out cursor-pointer hover:text-purple-500">
              👥Duets
            </li>
            <button className="text-white font-semibold text-sm cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-pink-700 px-7 py-1.5 rounded-full">
              Signin
            </button>
          </ul>
        </div>
      </nav>

      <div className="relative w-[90vw]  h-[60vh] my-10 p-10 mx-auto overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl">
        <div className="absolute inset-0 grid grid-cols-10 opacity-20 ">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="rounded-full bg-black/10">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTExIDUuNUgzM1YzMy41SDExVjUuNVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUwIDc1QzY0LjA0NTcgNzUgNzUuNSA2My41NDU3IDc1LjUgNDkuNUM3NS41IDM1LjQ1NDMgNjQuMDQ1NyAyNCA1MCAyNEMzNS45NTQzIDI0IDI0LjUgMzUuNDU0MyAyNC41IDQ5LjVDMjQuNSA2My41NDU3IDM1Ljk1NDMgNzUgNTAgNzVaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPgogIDxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjE1IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPgo="
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="relative text-center text-white md:mt-10">
          <h1 className="text-4xl font-bold md:text-5xl">
            Sing Together With Friends, <br /> Anywhere in the World
          </h1>
          <p className="max-w-md mx-auto mt-4 text-lg">
            Join the ultimate karaoke experience with real-time video chat,
            intelligent scoring, and thousands of songs to choose from.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button className="flex items-center gap-2 px-6 py-3 font-semibold text-purple-600 bg-white rounded-full shadow-md">
              🎵 Create Room
            </button>
            <button className="flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-full shadow-md cursor-not-allowed bg-white/30">
              👥 Join a Room
            </button>
          </div>
        </div>
      </div>

      <section className="w-[90vw] mx-auto my-10">
        <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-pink-500 bg-clip-text">
          Duet Challenges{" "}
          <span className="px-2 py-1 ml-2 text-xs text-white bg-red-500 rounded-full">
            NEW
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-4 md:grid-cols-2">
          {[
            {
              icon: (
                <IoMdMusicalNotes
                  size={25}
                  color="white"
                  className="rounded-full p-1.5 bg-white/30"
                />
              ),
              tittle: "Browse Songs",
              color: "#976df7",
            },
            {
              icon: (
                <IoMdMusicalNotes
                  size={25}
                  color="white"
                  className="rounded-full p-1.5 bg-white/30"
                />
              ),
              tittle: "Create Room",
              color: "#ee5da4",
            },
            {
              icon: (
                <IoMdMusicalNotes
                  size={25}
                  color="white"
                  className="rounded-full p-1.5 bg-white/30"
                />
              ),
              tittle: "Join Duets",
              color: "#14bad6",
            },
            {
              icon: (
                <IoMdMusicalNotes
                  size={25}
                  color="white"
                  className="rounded-full p-1.5 bg-white/30"
                />
              ),
              tittle: "My Library",
              color: "#fbc22f",
            },
          ].map((i, id) => (
            <div
              key={id}
              className={` cursor-pointer p-5 flex flex-col items-center justify-center space-y-3 text-white bg-[${i.color}] rounded-lg shadow-md p-5`}
            >
              {i.icon}
              <h3 className="text-lg font-semibold">{i.tittle}</h3>
            </div>
          ))}
        </div>
      </section>

      <div className="relative w-[90vw]  h-[40vh] my-10 p-10 mx-auto overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl">
        <div className="absolute inset-0 grid grid-cols-10 opacity-20 ">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="rounded-full bg-black/10">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTExIDUuNUgzM1YzMy41SDExVjUuNVoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUwIDc1QzY0LjA0NTcgNzUgNzUuNSA2My41NDU3IDc1LjUgNDkuNUM3NS41IDM1LjQ1NDMgNjQuMDQ1NyAyNCA1MCAyNEMzNS45NTQzIDI0IDI0LjUgMzUuNDU0MyAyNC41IDQ5LjVDMjQuNSA2My41NDU3IDM1Ljk1NDMgNzUgNTAgNzVaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPgogIDxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjE1IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPgo="
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="relative flex items-center justify-between mt-5 text-white ">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold md:text-5xl">
              Duet Karaoke Rooms
            </h1>
            <p className="max-w-md">
              Sing with partners from around the world! Join an existing duet or
              create your own room.
            </p>
            <div className="mt-6">
              <button className="flex items-center gap-2 px-6 py-3 font-semibold text-purple-500 bg-white rounded-full shadow-md cursor-pointer">
                Join a Room
              </button>
            </div>
          </div>
          <div className="flex -space-x-6">
            <img
              src="https://placehold.co/200/9333ea/ffffff?text=You"
              alt=""
              className="z-10 border-4 border-purple-500 rounded-full w-36"
            />
            <img
              src="https://placehold.co/200/ec4899/ffffff?text=Partner"
              alt=""
              className="z-10 border-4 border-purple-500 rounded-full w-36"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <input
          type="text"
          placeholder="Search Songs..."
          className="bg-[#f2f2f2] p-5 rounded-2xl w-[90vw] mx-auto outline-none border-[1px] border-gray-300"
        />
      </div>

      <div className="p-6 w-[90vw] mx-auto">
        {/* Live Duets Section */}
        <div className="grid gap-8 md:grid-cols-3">
          {rooms.map((i, id) => {
            return (
              <div
                key={id}
                className="p-3 rounded-md border-[1px] border-gray-300 cursor-pointer hover:shadow-lg shadow-gray-300  duration-500 ease-in-out"
              >
                <div className="flex items-center gap-5">
                  <img src={i.image} className="w-12 h-12 rounded-xl" alt="" />
                  <div className="">
                    <h1 className="text-lg font-semibold">{i.tittle}</h1>
                    <p className="text-[#615775] text-sm">{i.singer}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between my-5">
                  <div className="flex items-center -space-x-3">
                    <img
                      src={i.dute1}
                      className="w-10 h-10 border-2 border-purple-500 rounded-full"
                      alt=""
                    />
                    <img
                      src={i.dute2}
                      className="w-10 h-10 border-2 border-purple-500 rounded-full"
                      alt=""
                    />
                  </div>
                  <button className="px-8 py-2 text-sm text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                    Join Now
                  </button>
                </div>
                <div>
                  <h1 className="py-2 mx-auto text-xs font-semibold text-center text-purple-600 bg-purple-200 rounded-full w-36">
                    Live Duet
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="w-full px-4 py-6 bg-white border-t border-gray-200 md:px-10">
        <div className="flex flex-col items-center justify-between mx-auto text-sm text-gray-600 max-w-7xl md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-lg font-bold text-gray-800">
              Sing<span className="text-pink-500">Along</span>
            </h1>
            <p className="text-gray-500">Sing together, anywhere.</p>
          </div>

          <div className="flex mt-4 space-x-6 md:mt-0">
            <h1 className="hover:text-gray-800">About</h1>
            <h1 className="hover:text-gray-800">Privacy</h1>
            <h1 className="hover:text-gray-800">Terms</h1>
            <h1 className="hover:text-gray-800">Contact</h1>
          </div>

          <div className="mt-4 text-center md:mt-0 md:text-right">
            <p>© 2025 SingAlong. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
