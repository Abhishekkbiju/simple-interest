import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
 const [pamount,setpamount]=useState(0)
 const [rate,setrate]=useState(0)
 const [time,settime]=useState(0)

 const [validrate,setvalidrate]=useState(false)
 const [validtime,setvalidtime]=useState(false)

 const [validpamount,setvalidapmount]=useState(false)

 const [result,setresult]=useState(0)

 
//  const submitted=(e)=>{
//   e.preventDefault()
//   console.log(pamount,rate,time)

//   const pattern=/^[1-9][0-9]*$/
//   if(!pamount.match(pattern)){
//       // alert("invalid principle amount");
//       setvalidpamount(true)
//   }
//   if(!rate.match(/^[1-9][0-9]{0,1$}/))
//   {
//     alert("invalid rate")
//   }
//   if(!time.match(/^[1-9][0-9]{0,1$}/))
//   {
//     alert("invalid time")
//   }
 
//  }
const validinput=(e)=>{
  const {name,value}=e.target
  console.log(name,value)
  if(value.match(/[0-9]*?[0-9]+$/)){
  if(name=='pamount'){
    setpamount(value)
    setvalidapmount(true)
  }
  else if(name=='rate'){
    setrate(value)
    setvalidrate(true)

  }
  else{
    settime(value)
    setvalidtime(true)
  }
}
else{
  if(name=='pamount'){
    setpamount(0)
    setvalidapmount(false)
  }
  else if(name=='rate'){
    setrate(0)
    setvalidrate(false)
  }
  else{
    settime(0)
    setvalidtime(false)
  }

}}
console.log(pamount,rate,time)

const resetform=()=>{
  setpamount(0)
  setrate(0)
  settime(0)
  setresult(0)
  setvalidapmount(false)
  setvalidrate(0)
  setvalidtime(0)
}

const submitted=(e)=>{
  e.preventDefault()
  console.log(pamount,rate,time)
  const res=pamount*rate*time/100
  setresult(res)

}
 

  return (
    <>

    <div className='w-100 bg-dark d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <div className='bg-light w-50 shadow rounded p-5'>
      <h1>simple intrest</h1>
      <div className='d-flex justify-content-center p-5 border-shadow mt-3' style={{backgroundColor:'yellow'}}>
      ₹ {result}
      </div>
      <form onSubmit={(e)=>submitted(e)}>
        
        <div className='mt-2'>
        <TextField id="outlined-basic" value={pamount} name='pamount' onChange={(e)=>{validinput(e)}} style={{width:"100%"}}    label="principle amount" variant="outlined" />
       
       {
       !validpamount &&
       <div className='text-danger'>
        invalid principle amount</div> 
        
        }</div>
        <div className='mt-2'>
        <TextField id="outlined-basic" value={rate} name='rate' onChange={(e)=>{validinput(e)}}  style={{width:"100%"}}    label="  ₹Rate" variant="outlined" />
        {!validrate &&
       <div className='text-danger'>
        invalid principle amount</div> 
       }
        </div>
        <div className='my-2'>
        <TextField id="outlined-basic"  value={time}  name='time' onChange={(e)=>{validinput(e)}}  style={{width:"100%"}}    label="time" variant="outlined" />
      {
          !validtime &&
          <div className='text-danger'>
           invalid principle amount</div> 
           
      }
        </div>
        <Stack spacing={2} direction={'row'}>
        <Button variant="contained"  disabled={validpamount&&validrate&&validtime?false:true} type='submitt' className='bg-dark' style={{height:"50px",width:"50%"}}>Submit</Button>
        <Button variant="contained"  className='bg-info' onClick={resetform} style={{height:"50px",width:"50%"}}>Reset</Button>
        </Stack>

      </form>
      </div>

    </div>
     
    </>
  )
}

export default App


