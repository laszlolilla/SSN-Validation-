
	
function getCNPNumber() {
	var inputcnp=document.getElementById("cnp");
	var inputyear = document.getElementById("year");
	var inputmonth = document.getElementById("month");
	var inputday = document.getElementById("day");
	
	
	var lungime = getCNPNumber.value.length;
	var cnpday = getCNPNumber.value.substr(5,2);
	var cnpmonth = getCNPNumber.value.substr(3,2);
	var cnpyear = getCNPNumber.value.substr(1,2);
	
	
	var birthyear = inputyear.value.slice(-2)
	var birthmonth = inputmonth.value.slice(-2)
	var birthday = inputday.value.slice(-2)
	
	
	
if (isNaN(getCNPNumber.value) == true) {
	alert("Your CNP must contain numbers only, please try again.");
	}

	else if (lungime != 13) {
		alert("Your CNP must contain 13 digits, please try agai.");
	}
	
	else if (cnpday != birthday) { 
		alert("Your birthday does not correspond to the one introduced in the CNP, please check again.");
	}		
	
	else if (cnpmonth.value != birthmonth.value) {
		alert("Your birthmonth does not correspund to the one introduced in the CNP, please check again.");
	}
	
	else if (cnpyear.value != birthyear.value) { 
		alert("Your birthyear does not correspund to the one introduced in the CNP, please check again.");
	}

	else { 
		alert ("Your data has been validated.");
	}

	
	
	
	
}
	
	
	
	
	
	
	
	
	
/*	var n = parseInt(inputcnp, 10);
	console.log(n);
	
	if(isNaN(n)){
		alert('The CNP must contain numbers only.');
		return;
	}
	



*/