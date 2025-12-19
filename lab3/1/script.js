function validate() {
    let name = document.getElementById("name").value;
    let em = document.getElementById("email").value;
    let ph = document.getElementById("phone").value
    let pw = document.getElementById("pw").value;
    let cpw = document.getElementById("cpw").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = 
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        
    if (name.length < 5) {
        alert("Username must be filled out");
        return false;
    }

    if (!emailRegex.test(em)) {
        alert("Wrong Email pattern");
        return false;
    } 

    if (!phoneRegex.test(ph)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    if (!passwordRegex.test(pw)) {
        alert("Wrong Password");
        return false;
    }

    if (pw !== cpw) {
        alert("Password does not match");
        return false;
    }

    alert("Register Successful!")
        return true;
}