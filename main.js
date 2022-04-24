// saved profile details
		let sFname = localStorage.getItem("sFname");
		let sLname = localStorage.getItem("sLname");
		let sEmail = localStorage.getItem("sEmail");
		let sPswd = localStorage.getItem("sPswd");
		let sAddress = localStorage.getItem("sAddress");
		let sAddress2 = localStorage.getItem("sAddress2");
		let sCity = localStorage.getItem("sCity");
		let sState = localStorage.getItem("sState");
		
		// display user balance
		let balance = localStorage.getItem("balance");
		let balanceInt = parseInt(balance);
		if(balance == null) {
			balance = 0;
			$("#balance").text(balance +".000");
		}else{
		 $("#balance").text(balanceInt + ".000");
		}
		
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
		let battLvl;
		
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
  	battLvl = document.getElementById("batteryLevel").value;
  	
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

let withdrawInput;
let wallet;
let withdrawBtn = document.getElementById("withdrawBtn");

withdrawBtn.addEventListener("click", function(){
	withdrawInput = document.getElementById("amount");
	wallet = document.getElementById("wallet");
	walletBal = localStorage.getItem("balance");
	if(withdrawInput.value == "" | wallet.value == ""){
		alert("Fill in all fields to complete withdrawal request");
	}else if(withdrawInput.value < 7){
		alert ("Minimum amount for withdrawal is 7 USDT ")
	} else if(withdrawInput.value > walletBal){
		alert ("insufficient balance")
	} else {
		let remainingBal = parseInt(walletBal) - parseInt(withdrawInput.value);
		let remainingBal2 = remainingBal.toString();
		localStorage.setItem("balance", remainingBal2);
		$("#balance").text(remainingBal+".000");
		alert("Withdrawal successful, you'll receive payment in your account within 2 hours");
		window.location="index.html";
	}
})

// timer for earning section 

let sec = 60;
let earnBtn = document.getElementById("earn-btn");
let mineTime = document.getElementById("mineTime");
mineTime.innerHTML = 60;
let userBal = balanceInt;


function earnTimer(){
	timerInterval = setInterval(function(){
		
		sec -= 1;
		mineTime.innerHTML = sec;
		$("#status").text("Active");
		$("#status").css({"color":"green"})
		$(earnBtn).css({"background":"green"})
		$(earnBtn).prop("disabled", true);
		

		if(sec == 0){
			clearInterval(timerInterval);
			mineTime.innerHTML = 60;
			sec = 60;
			$(earnBtn).prop("disabled", false);
			$(earnBtn).css({"background":""})
			$("#status").text("Inactive");
		    $("#status").css({"color":"#0d6efd"})

			//change user balance 
			userBal +=1;
			localStorage.setItem("balance", userBal);
			userBalSaved = localStorage.getItem("balance");
			$("#balance").text(userBalSaved +".000");		
			
		}
	},1000)
};
