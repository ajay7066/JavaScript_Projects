const endDate= "10 october 2022 12:00 AM";

document.getElementById("endDate").innerText = endDate;

function clock(){
	const end = new Date(endDate);
	const now = new Date();
	// console.log(end);
	// console.log(now);
	const diff =(end - now);
	console.log(diff/3600/60/24);

}

clock();