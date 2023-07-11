import { useState } from "react";
import axios from "axios";

function Bitcoin()
{
			const[type, setType] =useState("USD");
			const [ans, setAns] = useState("");
				

			const hType = (event) => { setType(event.target.value);}

const bit= (event) => {
event.preventDefault();
let urladd = "https://api.coindesk.com/v1/bpi/currentprice.json";
axios.get(urladd)
.then (res => {
	setAns(res.data.bpi[type].rate)
})
.catch(err => setAns("issue" + err));
}
	
return(
	<>
	<center>
<h1> Bitcoin App </h1>
<form onSubmit={bit}>

	<input type="radio" name="f" value="USD" defaultChecked={true} onChange={hType} />USD
	<input type="radio" name="f" value="GBP"  onChange={hType} />GBP
	<input type="radio" name="f" value="EUR"  onChange={hType} />EUR
<br/><br/>
<input type="submit" value="Find"/>
</form>
<h1> { ans } </h1>
</center>
</>
);
}
export default Bitcoin;





