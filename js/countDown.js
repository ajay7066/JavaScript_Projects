const endDate= "10 october 2022 12:00 AM";

document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock(){
	const end = new Date(endDate);
	const now = new Date();
	// console.log(end);
	// console.log(now);
	const diff =(end - now)/1000;
	inputs[0].value = Math.floor(diff/3600/24)

}

clock();