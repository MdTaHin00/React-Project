
function ExpenFilter({onSelectCategory}){
     return(
  <div className="">
    <select defaultValue="Pick a color" className="select broder-2 border-r-violet-600 my-3" onChange={(e)=>{
    onSelectCategory(e.target.value);
    // console.log(e.target.value);
    
  }}>
<option value={""}>All</option>
<option value={"Crimson"}>Crimson</option>
<option value={"Amber"}>Amber</option>
<option value={"Velvet"}>Velvet</option>
<option value={"Babar"}>Babar</option>
</select>

  </div>
  )
}

export default ExpenFilter
