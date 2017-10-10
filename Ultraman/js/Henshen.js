var oUltraman=document.getElementById("Ultraman");
var oTime=window.setInterval('bigger()',500);
var big=40;
//oUltraman.style.width="10%";
//oUltraman.style.width="6%";
function bigger () {
	
	oUltraman.style.width=big+"%";
	oUltraman.style.height='auto';
	big=big+30;
	oUltraman.style.display="block";
//	alert(big);
	if(big>100){
	oUltraman.style.width="1200px";
	oUltraman.style.height="auto";
}
	oTime=window.clearInterval('bigger()',1000);
}


