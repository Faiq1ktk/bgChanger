import { useState } from 'react';
import './App.css'

function App() {

  const [color, setColor] = useState("white");

  return (
    <div 
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >

      {/* Bottom Center Bar */}
      <div 
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2"
      >
        {/*
          HOW CENTERING WORKS:

          left-1/2 → moves element to 50% from left
          -translate-x-1/2 → moves it back by 50% of its own width

          RESULT → perfectly centered horizontally
        */}

        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-4 py-3 rounded-xl">

          {/* RED */}
          <div className="flex flex-col items-center">
            <button 
              className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600"
              onClick={() => setColor("red")}
            />
            <span className="text-xs mt-1">Red</span>
          </div>

          {/* GREEN */}
          <div className="flex flex-col items-center">
            <button 
              className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600"
              onClick={() => setColor("green")}
            />
            <span className="text-xs mt-1">Green</span>
          </div>

          {/* BLUE */}
          <div className="flex flex-col items-center">
            <button 
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600"
              onClick={() => setColor("blue")}
            />
            <span className="text-xs mt-1">Blue</span>
          </div>

          {/* YELLOW */}
          <div className="flex flex-col items-center">
            <button 
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600"
              onClick={() => setColor("yellow")}
            />
            <span className="text-xs mt-1">Yellow</span>
          </div>

          {/* PURPLE */}
          <div className="flex flex-col items-center">
            <button 
              className="w-10 h-10 rounded-full bg-purple-500 hover:bg-purple-600"
              onClick={() => setColor("purple")}
            />
            <span className="text-xs mt-1">Purple</span>
          </div>

          {/* PINK */}
          <div className="flex flex-col items-center">
            <button 
              className="w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600"
              onClick={() => setColor("pink")}
            />
            <span className="text-xs mt-1">Pink</span>
          </div>

          {/* ORANGE */}
          <div className="flex flex-col items-center">
            <button 
              className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600"
              onClick={() => setColor("orange")}
            />
            <span className="text-xs mt-1">Orange</span>
          </div>

          {/* CYAN */}
          <div className="flex flex-col items-center">
            <button 
              className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600"
              onClick={() => setColor("cyan")}
            />
            <span className="text-xs mt-1">Cyan</span>
          </div>

          {/* LIME */}
          <div className="flex flex-col items-center">
            <button 
              className="w-10 h-10 rounded-full bg-lime-500 hover:bg-lime-600"
              onClick={() => setColor("lime")}
            />
            <span className="text-xs mt-1">Lime</span>
          </div>
          <div className="flex flex-col items-center">
  <button 
    className="w-10 h-10 rounded-full bg-white border"
    onClick={() => setColor("white")}
  />
  <span className="text-xs mt-1">White</span>
</div>
{/* TEAL */}
<div className="flex flex-col items-center">
  <button 
    className="w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600"
    onClick={() => setColor("teal")}
  />
  <span className="text-xs mt-1">Teal</span>
</div>

{/* INDIGO */}
<div className="flex flex-col items-center">
  <button 
    className="w-10 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600"
    onClick={() => setColor("indigo")}
  />
  <span className="text-xs mt-1">Indigo</span>

  
</div>

{/* SKY */}
<div className="flex flex-col items-center">
  <button 
    className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600"
    onClick={() => setColor("skyblue")}
  />
  <span className="text-xs mt-1">Sky</span>
</div>




        </div>
      </div>

    </div>
  )
}

export default App;