import React,{useState} from 'react';
import img1 from "../../../assets/poert1 (1).png";
import img2 from "../../../assets/poert1.png"
import img3 from "../../../assets/port2 (1).png"
import img4 from "../../../assets/port2.png"
import img5 from "../../../assets/port3 (1).png"
import img6 from "../../../assets/port3.png"
import { MainHeader } from '../../../MainHeader/MainHeader';

const imaglist = [img1,img2,img3,img4,img5,img6];

export default function Portfolio() {
  const [isOpen, setisOpen] = useState(null);

     
  
  function handleClick(number){
    setisOpen(number);
    

  }
  
  return (
     <>
     <div className='mt-40 '>
      <MainHeader>portfolio component</MainHeader>
     </div>
     
    <div className="flex flex-wrap mt-20   ">
      {imaglist.map((ele, index) => (
    <Card key={index} number={index}  image={ele} onHandleModal={handleClick}/>
    ))}
    </div>
    {isOpen !== null ? <Modal onHandleModal={setisOpen} image={imaglist[isOpen]} /> :null}
    </>
    
  );
}
function Card ({image, onHandleModal,number}){
  return(
    <div className='w-full sm:w-1/3 p-2 cursor-pointer '>
      <img src={image} alt="port" className='w-full rounded-md'
      onClick={()=> onHandleModal(number)} />
    </div>
  
  );
}
function Modal({image,onHandleModal}){
  return(
<div className="absolute inset-0 bg-white/20 flex items-center justify-center  " onClick={()=>onHandleModal(null)}>
  <div className="w-1/3 mx-auto">
  <img src={image} alt="" /></div>
</div>

  )

}
