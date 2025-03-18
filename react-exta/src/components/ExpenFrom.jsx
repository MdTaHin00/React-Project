import { useForm } from "react"; 
function ExpenFrom() {
  const categories=["tour","utility bill","personal expense"];


  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState:{ errors },
  }=useForm();

  const onSubmit=(data)=>console.log(data);
  

  return (
    <div className="flex justify-center ">
     <form action="" onSubmit={handleSubmit(onSubmit)} >
     <input type="text" placeholder="Description" className="input input-accent mb-3" {...register("description")}/>
     <input type="number" 
      placeholder="Amount"
      className="input input-accent border-1 mb-3"/>
   <div>
   <label htmlFor="" className="text-blue-700 font-bold">Chooose Category</label>
   
   </div>

    
     <select defaultValue="Pick a color" className="select broder-2 border-r-violet-600 "
      // onChange={(e)=>{
    // onSelectCategory(e.target.value); 
    // {/* // console.log(e.target.value);
     >
 
      {categories.map((categor)=>(
      <option key={categor} value={categor}> 
          {categor}
      </option>
      ))}
   </select>
   <h1 className="inline-block bg-blue-800 py-1 px-28 rounded-2xl text-yellow-50 mt-3">Add Category</h1>
     
     </form>
    
    </div>
  )
}

export default ExpenFrom
