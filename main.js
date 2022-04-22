// saved profile details
		let sFname = localStorage.getItem("sFname");
		let sLname = localStorage.getItem("sLname");
		let sEmail = localStorage.getItem("sEmail");
		let sPswd = localStorage.getItem("sPswd");
		let sAddress = localStorage.getItem("sAddress");
		let sAddress2 = localStorage.getItem("sAddress2");
		let sCity = localStorage.getItem("sCity");
		let sState = localStorage.getItem("sState");
		
		// declare empty variables for getting user input
		let fname ;
		let lname ;
		let address ;
		let address2 ;
		let city ;
		let state ;
		
		
		
		
		// fill user details to form value
		$("#updateFname").val(sFname)
		$("#updateLname").val(sLname)
		$("#updateEmail").val(sEmail)
		$("#updateFname").val(sFname)
		$("#updateAddress").val(sAddress)
		$("#updateAddress2").val(sAddress2)
		$("#updateCity").val(sCity)
		$("#updateState").val(sState)
		
		//email notice 
		$("#updateEmail").click(function(){
			alert("Email can't be changed ")
			})
			
			function updateProfile(){
				let pass = prompt("Enter Your Account Password To Update Profile");
				if(pass === sPswd){
				
				fname = $("#updateFname").val();
				lname = $("#updateLname").val();
				address = $("#updateAddress").val();
				address2 = $("#updateAddress2").val();
				city = $("#updateCity").val();
				state = $("#updateState").val();
				
				
				localStorage.setItem("sFname", fname);
				localStorage.setItem("sLname", lname);
				localStorage.setItem("sAddress", address);
				localStorage.setItem("sAddress2", address2);
				localStorage.setItem("sCity", city);
				localStorage.setItem("sState", state);
				
				alert("Profile updated successfully ");
				window.location ="index.html"
				} else if(pass == null) {
					
				}else 	{
					alert("Wrong password, Try again ")
				}
				
			}
		
		
		window.onload = function(){
			if(sFname == undefined ){
				window.location="login.html";
			};
			
			$("#firstname").text(sFname);
		};
		
		function logout(){
			window.location="login.html";
		}
		
		
		// battery level get 
		let battLvl = $("#batteryLevel").val();
		
		
		navigator.getBattery().then(battery => {
					function updateAllBatteryInfo() {
						updateLevelInfo();
						updateChargeInfo();
					}
					updateAllBatteryInfo();
					
					battery.addEventListener('levelchange', () => {
    updateLevelInfo();
  });
  function updateLevelInfo(){
                $("#batteryLevel").text(battery.level * 100 + "%");
                $("#userOnline").text(Math.ceil(battery.level*100 / 4 +10 ))
               if(battLvl < 16){
               	$("#batteryLevel").css({"color":"red"})
               }
                
  }
  
  
	
	battery.addEventListener('chargingchange', () => {
    updateChargeInfo();
  });
  function updateChargeInfo(){
    //console.log("Battery charging? "
              //  + (battery.charging ? "Yes" : "No"));
                if (battery.charging == true){
                $("#batteryLevel").css({"color":"lightgreen"})
                } else {
                $("#batteryLevel").css({"color":"white"})

                }
  }
  }	);
  
// withdraw function

let balance ;
let withdrawInput;
let withdrawBtn = document.getElementById("withdrawBtn");

withdrawBtn.addEventListener("click", function(){
	balance = document.getElementById("balance"); 
	withdrawInput = document.getElementById("amount");
	if(withdrawInput.value > balance.value){
		alert ('insufficient balance ')
		console.log(withdrawInput.value)
	} else {
		alert("Withdrawal successful, you'll receive payment in your account within 2 hours")
	}
})

