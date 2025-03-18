import { useState } from 'react';
import './App.css'
import ExpenList from "./components/ExpenList"
import ExpenFilter from './components/ExpenFilter';
import ExpenFrom from './components/ExpenFrom';
ExpenFrom

function App() {


    const [expense,setExpense]=useState(
      [
        {id:1,category:"Crimson",description:"text..",amount:300},
        {id:2,category:"Amber",description:"text..",amount:100},
        {id:3,category:"Velvet",description:"text..",amount:200},
        {id:4,category:"Babar",description:"text..",amount:45.5},
       
    ]);

    //?  array filter

    // const numbers=[1,2,3,4,56,7,8,9,10];
    // const filterNumber=numbers.filter((num)=>num % 2 ===0);

  //? category select

    const [selectCategory,setSelectCategory]=useState("");


    const filterExpenses= selectCategory ? expense.filter((data)=>data.category === selectCategory) : expense;

  return (
    <>
   <div  className='p-16'>
     
        
      {/* <ExpenFrom/> */}
     
      <ExpenFilter  onSelectCategory={(category)=>setSelectCategory(category)}/>
 
     <ExpenList expense={filterExpenses} onDelete={(id)=> setExpense(expense.filter(data=>data.id !==id))}/>
           
           
      {/* <div className='text-center mt-5'>
        <h1 className='text-cyan-400'> Array filter Show</h1>
        <h2 className='font-semibold text-3xl'>{filterNumber}</h2>
        </div> */}

   </div>
      
    </>
  )
}

export default App
