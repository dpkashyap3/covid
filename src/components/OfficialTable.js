import React from 'react'
import Search from "./SearchOfficial"

function OfficialTable({region}) {
    
    return (    
<div className="row mt-5 table-responsive">
     <h2 className="banner-heading h1 ml-5">India Official Information Statewise</h2>
    <hr/>

     <Search region={region}/>

    <hr/>

    <table class="table table-hover table-secondary m-3" style={{fontSize:"13px"}}>
    <thead>
    <tr>
      <th scope="col">State</th>
      <th scope="col">Indian</th>
      <th scope="col">Foreign</th>
      <th scope="col">Total</th>
      <th scope="col">Recover</th>
      <th scope="col">Death</th>
    </tr>
  </thead>
  <tbody>
    {
        region.map(item=>{
            return(
    <tr key={item.loc}>
        <td><b><i>{item.loc}</i></b></td>
         <td><b>{item.confirmedCasesIndian}</b></td>
         <td><b>{item.confirmedCasesForeign}</b></td>
         <td><b>{item.confirmedCasesIndian+item.confirmedCasesForeign}</b></td>
         <td><b>{item.discharged}</b></td>
         <td><b>{item.deaths}</b></td>
    </tr>
        )})
   
    }
    
    
  </tbody>
</table>
</div> 
        
    )
}

export default OfficialTable
