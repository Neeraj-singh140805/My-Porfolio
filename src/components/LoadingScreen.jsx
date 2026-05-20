// import { useEffect, useState } from "react";

// export const LoadingScreen = ({ onComplete }) => {
//   const [text, setText] = useState("");
//   const fullText = "WELCOME TO MY PORTFOLIO";

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setText(fullText.substring(0, index));
//       index++;

//       if (index > fullText.length) {
//         clearInterval(interval);

//         setTimeout(() => {
//           onComplete();
//         }, 1000);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
//       <div className="mb-4 text-4xl font-mono font-bold">
//         {text} <span className="animate-blink ml-1"> | </span>
//       </div>

//       <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
//         <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
//       </div>
//     </div>
//   );
// };


import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "WELCOME TO MY PORTFOLIO";

  useEffect(() => {
    const audio = new Audio("/audio1 copy.mp3");
    audio.volume = 0.4;
    audio.loop = true;

    // ---- FIX AUTOPLAY BLOCK ----
    const startAudio = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", startAudio);
    };
    window.addEventListener("click", startAudio);
    // This ensures sound plays once user clicks anywhere

    let index = 1;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          audio.pause();
          audio.currentTime = 0;
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      audio.pause();
      window.removeEventListener("click", startAudio);
    };
  }, [onComplete]);

  return (
    <div
      onClick={() => {}} // dummy interaction support
      className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      <p className="text-sm text-gray-400 mt-2">Click anywhere for sound</p>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden mt-4">
        <div className="w-[40%] h-full animate-loading-bar"></div>
      </div>
    </div>
  );
};








