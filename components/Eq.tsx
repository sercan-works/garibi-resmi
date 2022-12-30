import Image from "next/image";
import React, { useEffect, useState } from "react";
import plak from "../assets/img/plak.png"
import berceste from "../assets/music/berceste.mp3"
import { FaStepBackward, FaStepForward } from "react-icons/fa";
import PlayerMain from "./PlayerMain";
const Eq = () => {
  const [plakMotion, setPlakMotion] = useState(true);
  const [track,setTrack] = useState()


  useEffect(() => {

setTrack('berceste')

  }, []);

  return (
    <>
      <div className="z-10 flex flex-row space-x-3 p-5 absolute rounded-xl bottom-10 left-20 bg-gray-100 bg-opacity-40">
        <div className=" hover:text-amber-300 cursor-pointer text-gray-100 flex align-bottom my-auto hover:scale-110 duration-300 transform-all ease-linear">
          <FaStepBackward className="w-7 h-7" />
        </div>


        {plakMotion == true ? (
          <div className="cursor-pointer animate-spin-slow" onClick={()=>setPlakMotion(!plakMotion)}>
            <Image src={plak} width="75" height="75" alt="plak" />
          </div>
        ) : (
          <div className="cursor-pointer " onClick={()=>setPlakMotion(!plakMotion)}>
            <Image src={plak} width="75" height="75" alt="plak" />
          </div>
        )}



        <div className="hover:text-amber-300 cursor-pointer text-gray-100 flex align-bottom my-auto hover:scale-110 duration-300 transform-all ease-linear">
          <FaStepForward className="w-7 h-7" />
        </div>
      </div>


    
      <audio className="bg-blue-500"
        controls

      
      
        // src={require('./berceste.mp3')}>
        src={berceste}>
      
    </audio>


<PlayerMain/>

      <div className="absolute left-24 z-9 bottom-20 hidden">
        <div className="animate-spin-slow">
          <Image src={plak} width="150" height="150" alt="plak" />
        </div>
      </div>
    </>
  );
};

export default Eq;
