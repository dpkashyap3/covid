import React,{useState,useEffect} from 'react'
import axios from "axios"
import Total from "../../components/images/total.png"
import Recover from "../../components/images/recover.png"
import Dead from "../../components/images/rip.png"
import Serious from "../../components/images/serious.png"
import New from "../../components/images/new.png"
import Treatment from "../../components/images/treatment.png"
import NewDead from "../../components/images/newdead.png"
import Viewer from "../../components/Viewer"
import IndiaPie from "../../Chart/IndiaPie"



function Summary() {

const [data, setdata] = useState([])

useEffect(()=>{
  axios.get("https://api.thevirustracker.com/free-api?countryTotal=IN")
  .then(response=>{
    setdata(response.data.countrydata[0])
  })
},[])

return (
<div className="container">
<h1 className="banner-heading display-4">India Information</h1>
<div className="row">

<Viewer title={"Total Case"} image={Total} count={data.total_cases} wide={"Indian Official Data"}/>
<Viewer title={"Recovered"} image={Recover} count={data.total_recovered} wide={"Indian Official Data"}/>
<Viewer title={"Total Death"} image={Dead} count={data.total_deaths} wide={"Indian Official Data"}/>
<Viewer title={"New Cases"} image={New} count={data.total_new_cases_today} wide={"Indian Official Data"}/>
<Viewer title={"New Deaths"} image={NewDead} count={data.total_new_deaths_today} wide={"Indian Official Data"}/>
<Viewer title={"Serious Case"} image={Serious} count={data.total_serious_cases} wide={"Indian Official Data"}/>
<Viewer title={"Treatments"} image={Treatment} count={data.total_active_cases} wide={"Indian Official Data"}/>
</div>
<IndiaPie chart={data}/>

</div>

    )
}

export default Summary
