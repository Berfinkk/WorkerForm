import {useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddWorker(props) {
 const [enteredWorkerName,setEnteredWorkerName] =useState("")
 const [enteredSalary,setEnteredSalary]=useState("")
 const [error,setError]=useState()

const minimumSalary=5000;

 const addWorkerHandler=(e)=>{
  e.preventDefault()
  if(enteredWorkerName.trim().length===0 || enteredSalary.trim().length===0){
    setError({
      title:"İsim Ve Maaş Alanı Zorunludur!",
      message:"Lütfen zorunlu alanları boş bırakmayınız."
    })
    return
  }

  if(+enteredSalary<minimumSalary){
    setError({
      title:"Geçersiz Maaş!",
      message:`Lütfen ${minimumSalary} TL ve üzeri bir maaş giriniz.`
    })
    return
  }
  setEnteredSalary("")
  setEnteredWorkerName("")
  props.setWorkers((prevState)=>[
    {
      id:Math.floor(Math.random()*1000),
      name:enteredWorkerName,
      salary:enteredSalary
    },
    ...prevState
  ])
 
 }

 const errorHandler=()=>{
   setError(null)
 }

  return (
  <div>
    {error && <ErrorModal onConfirm={errorHandler} error={error}/>}
    <Card addClass="mt-10">
     <form className='flex flex-col gap-y-2' onSubmit={addWorkerHandler}>
    <label htmlFor='name' className='font-medium'>Çalışan İsmi</label>
    <input type='text'
    className='max-w-[40rem] w-full mx-auto border p-2' 
    placeholder='Çalışan İsmi yazınız' 
    id='name'
    onChange={(e)=>setEnteredWorkerName(e.target.value)} 
    value={enteredWorkerName}/>
    <label htmlFor='salary' className='font-medium'>Maaş Miktarı</label>
    <input type='number'  
    className='max-w-[40rem] w-full mx-auto border p-2' 
    placeholder='Maaş miktarı yazınız' 
    id='salary'
    onChange={(e)=>setEnteredSalary(e.target.value)}
    value={enteredSalary}/>
    <Button type="submit">
      Ekle
    </Button>
    </form>
  </Card>
  </div>
  )
}

export default AddWorker