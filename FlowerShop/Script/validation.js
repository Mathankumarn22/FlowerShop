function Validation() {
    var flag = true;

    //Validation for Card number
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var cardno = document.getElementById("card")
    if (cardno.value == "") {
        document.getElementById("cardrequired").style.display = "block";
        document.getElementById("validatecard").style.display = "none";
        flag = false;
    }
    else if (!cardno.value.match(regex)) {
        document.getElementById("cardrequired").style.display = "none";
        document.getElementById("validatecard").style.display = "block";
        flag = false;
    }
    else {
        document.getElementById("cardrequired").style.display = "none";
        document.getElementById("validatecard").style.display = "none";
        }
    //Validation for Security code
    var code = document.getElementById("code");
    var regex = /^[0-9][0-9][0-9]$/;
    if (code.value == "") {
        document.getElementById("validatecode").style.display = "none";
        document.getElementById("coderequired").style.display = "block";
        flag=false;

    }
    else if (!code.value.match(regex)) {
        document.getElementById("coderequired").style.display = "none";
        document.getElementById("validatecode").style.display = "block";
        flag=false;
    }
    else {
        document.getElementById("coderequired").style.display = "none";
        document.getElementById("validatecode").style.display = "none";
     
    }

    //Validation for cardholder's name
    var name = document.getElementById("name");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (name.value == "") {

        document.getElementById("validatename").style.display = "none";
        document.getElementById("namerequired").style.display = "block";
        flag=false;

    }
    else if (!name.value.match(regex)) {
        document.getElementById("namerequired").style.display = "none";
        document.getElementById("validatename").style.display = "block";
        flag=false;
    }
    else {
        document.getElementById("namerequired").style.display = "none";
        document.getElementById("validatename").style.display = "none";
       
    }
    
    //Validation for postcode
    var zip = document.getElementById("zip");
    var regex = /[0-9]{6}/;
    if (zip.value == "") {
        document.getElementById("validatepost").style.display = "none";
        document.getElementById("postrequired").style.display = "block";
        flag=false;
    }
    else if (!zip.value.match(regex)) {
        document.getElementById("postrequired").style.display = "none";
        document.getElementById("validatepost").style.display = "block";
        flag=false;
    }
    else
    {
        document.getElementById("postrequired").style.display = "none";
        document.getElementById("validatepost").style.display = "none";
     
    }

    
    //Validation for Month and Year
    var month = document.getElementById("month").selectedIndex;
    var year = document.getElementById("year").selectedIndex;
    if (month == 0 || year == 0)
    {
        document.getElementById("requiredDate").style.display = "block";
        flag = false;
    }
    else {

        document.getElementById("requiredDate").style.display = "none";
    }

    

    // Validation for Address
    var address = document.getElementById("address");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (address.value == "") {
        document.getElementById("validateaddress").style.display = "none";
        document.getElementById("addressrequired").style.display = "block";
        flag=false;
    }
    else if (!address.value.match(regex)) {
        document.getElementById("addressrequired").style.display = "none";
        document.getElementById("validateaddress").style.display = "block";
        flag=false;
    }
    else {

        document.getElementById("addressrequired").style.display = "none";
        document.getElementById("validateaddress").style.display = "none";
       
    }

    //Validation for Town/city
    var city = document.getElementById("city");
    var regex = /^[A-Za-z]+$/;
    if (city.value == "") {

        document.getElementById("validatetown").style.display = "none";
        document.getElementById("townrequired").style.display = "block";
        flag=false;
    }
    else if (!city.value.match(regex)) {
        document.getElementById("townrequired").style.display = "none";
        document.getElementById("validatetown").style.display = "block";
        flag=false;
    }
    else {

        document.getElementById("townrequired").style.display = "none";
        document.getElementById("validatetown").style.display = "none";
      
    }

    //Validation for Mail ID
    var mail = document.getElementById("mail");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.value == "") {
        document.getElementById("validatemail").style.display = "none";
        document.getElementById("mailrequired").style.display = "block";
        flag=false;
    }
    else if (!mail.value.match(regex)) {
        document.getElementById("mailrequired").style.display = "none";
         document.getElementById("validatemail").style.display = "block";
         flag=false;
    }
    else {
        document.getElementById("mailrequired").style.display = "none";
        document.getElementById("validatemail").style.display = "none";
        
    }

    if(flag==true) {     
        alert("Payment successfull");
    }
}


