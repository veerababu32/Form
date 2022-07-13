let fnameNode=document.getElementById("fname");
let lnameNode=document.getElementById("lname");
let emailNode=document.getElementById("email");
let passNode=document.getElementById("pass");
let cpassNode=document.getElementById("cpass");
let numberNode=document.getElementById("num");
let border1="2px solid red";
let border2="2px solid green";
let tdNode1=document.getElementById("error1");
let tdNode2=document.getElementById("error2");
let tdNode3=document.getElementById("error3");
let tdNode4=document.getElementById("error4");
let tdNode5=document.getElementById("error5");
let tdNode6=document.getElementById("error6");

function validate1(){
    tdNode1.textContent="";
    let fname=fnameNode.value;
    let regExp = /^[A-Za-z]/;
    console.log(regExp.test(fname));
    if(fname==''){
        tdNode1.textContent="*this field is required";
        fnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(fname)==false){
        tdNode1.textContent="name should have only alphabets";
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border2;
        return true;
    }
}

function validate2(){
    tdNode2.textContent="";
    let lname=lnameNode.value;
    let regExp = /^[A-Za-z]/;
    console.log(regExp.test(lname));
    if(lname==''){
        tdNode2.textContent="*this field is required";
        lnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(lname)==false){
        tdNode2.textContent="name should have only alphabets";
        lnameNode.style.border=border1;
        return false;
    }
    else{
        lnameNode.style.border=border2;
        return true;
    }
}

function validate3(){
    tdNode3.textContent="";
    let email=emailNode.value;
    let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(regExp.test(email));
    if(email==''){
        tdNode3.textContent="*this field is required";
        emailNode.style.border=border1;
        return false;
    }
    else if(regExp.test(email)==false){
        tdNode3.textContent="name should have only alphabets";
        emailNode.style.border=border1;
        return false;
    }
    else{
        emailNode.style.border=border2;
        return true;
    }
}

function validate4(){
    tdNode4.innerHTML="";
    let password=passNode.value;
    let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    console.log(regExp.test(password));
    if(password==''){
        tdNode4.textContent="*this field is required";
        passNode.style.border=border1;
        return false;
    }
    else if(regExp.test(password)==false){
        let spanNode=document.createElement("span");
        spanNode.textContent="the password should contain atleast one";
        let ulnode=document.createElement("ul");
        let linode1=document.createElement("li");
        linode1.textContent="Capital letter";
        let linode2=document.createElement("li");
        linode2.textContent="Small Letter";
        let linode3=document.createElement("li");
        linode3.textContent="Digit";
        let linode4=document.createElement("li");
        linode4.textContent="Special Symbol";
        ulnode.append(linode1,linode2,linode3,linode4);
        tdNode4.append(spanNode,ulnode);
        passNode.style.border=border1;
        return false;
    }
    else if(password.length<5 || password.length>12){
        tdNode4.textContent="Password should be atleast 5 and atmost 12 characters long";
        passNode.style.border=border1;
        return false;
    }
    else{
        passNode.style.border=border2;
        return true;
    }
}

function validate5(){
    tdNode5.textContent="";
    let confirmPass=cpassNode.value;
    let password=passNode.value;
    if(confirmPass==''){
        tdNode5.textContent="*this field is required";
        cpassNode.style.border=border1;
        return false;
    }
    else if(confirmPass!==password){
        tdNode5.textContent="Password not matching";
        cpassNode.style.border=border1;
        return false;
    }
    else{
        cpassNode.style.border=border2;
        return true;
    }
}

function validate6(){
    tdNode6.textContent="";
    let number=numberNode.value;
    let regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    console.log(regExp.test(fname));
    if(number==''){
        tdNode6.textContent="*this field is required";
        numberNode.style.border=border1;
        return false;
    }
    else if(regExp.test(number)==false){
        tdNode6.textContent="It consists only numbers & the numbers should 10 to 12";
        numberNode.style.border=border1;
        return false;
    }
    else{
        numberNode.style.border=border2;
        return true;
    }
}


function validateForm(){
    let st1=validate1();
    let st2=validate2();
    let st3=validate3();
    let st4=validate4();
    let st5=validate5();
    let st6=validate6();
    return st1 && st2 && st3 && st4 && st5 && st6;
}