var oUltraman=document.getElementById("Ultraman");
var oTime=window.setInterval('bigger()',1000);
var big=40;
//oUltraman.style.width="10%";
//oUltraman.style.width="6%";
function bigger () {
	oUltraman.style.width=big+"%";
	oUltraman.style.height=big*0.6+"%";
	big=big+30;
}