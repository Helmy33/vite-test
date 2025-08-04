import './MainHeader.css';
export function MainHeader({children}){
  return(
    <h1 className='MainHeader relative  text-center w-fit mx-auto uppercase text-3xl text-white font-bold pb-5 mb-5 '>{children}</h1>
  );
}