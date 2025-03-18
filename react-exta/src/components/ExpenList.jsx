
export default function ExpenList({expense,onDelete}) {
  return (
    <div>
    
        <div className="">
  <table className="table  table-zebra">
    {/* head */}
    <thead>
      <tr className="text-2xl text-primary">
      <th>Id</th>
        <th>Categrioy</th>
        <th>Description</th>
        <th>Amount</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {/* show expense */}

      {expense.length===0 ? (<p className="absolute top-20 left-[38%] text-red-500 font-extrabold text-3xl"> No Expense Found</p>):(expense.map((data)=>(
      <tr key={data.id}> 
      <th>{data.id}</th>
      <td>{data.category}</td>
      <td>{data.description}</td>
      <td>{data.amount}</td>
      <button className="btn btn-primary" onClick={()=>onDelete(data.id)}>Delete</button>
    </tr>
      )))}
     
      
      
    </tbody>
    {/* Total Price  */}
    <tfoot>
      <tr>
        <td></td>
        <td></td>
        <td className="text-primary font-bold text-2xl">Total</td>
        <td className="text-fuchsia-500">${expense.reduce((previous,crrent)=> previous + crrent.amount,0
  )}</td>
      </tr>
    </tfoot>
  </table>
</div>
    </div>
  )
}


