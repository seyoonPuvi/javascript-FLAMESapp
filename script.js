
// selecting html elements using getElementById

let usernameEl = document.getElementById("user__input");
let partnernameEl = document.getElementById("partner__name--input");
let checkBtn = document.getElementById("check__btn");
let resultContEl = document.getElementById("result__cont");
let userErrorMsgEl = document.getElementById("usernameErr");
let partnernameErrorMsgEl = document.getElementById("partnernameErr");
let resultTextEl = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");

// creating variables to store username,partnername
// usernameCopy is created for copying username to modifying the array
// username array is for iterating
let username;
let partnername;
let usernameCopy;


const flames = ["f","l","a","m","e","s"]



function displayTheResult(answer){
    // using setTimeout just for showing spinner element 
    setTimeout(()=>{
        spinnerEl.classList.toggle("display_none")
        switch (answer) {
            case "f":
                resultTextEl.textContent = `The future tells that ${usernameEl.value.toUpperCase()} and ${partnernameEl.value.toUpperCase()} are going to be good FRIENDS.`
                break;
            case "l":
                resultTextEl.textContent = `The future tells that ${usernameEl.value.toUpperCase()} and ${partnernameEl.value.toUpperCase()} are going to be LOVERS.`
                break;
            case "a":
                resultTextEl.textContent = `The future tells that ${usernameEl.value.toUpperCase()} and ${partnernameEl.value.toUpperCase()} are going to be AFFECTIONATE with each other.`
                break;
            
            case "m":
                resultTextEl.textContent = `The future tells that ${usernameEl.value.toUpperCase()} and ${partnernameEl.value.toUpperCase()} are going to get MARRIED soon.`
                break;
            case "e":
                resultTextEl.textContent = `The future tells that ${usernameEl.value.toUpperCase()} and ${partnernameEl.value.toUpperCase()} are ENEMYS.`
                break;
            case "s":
                resultTextEl.textContent = `The future tells that ${usernameEl.value.toUpperCase()} and ${partnernameEl.value.toUpperCase()} are SIBILINGS.`
                break;
            default:
                resultTextEl.textContent = "";
        }
    },800)
}

function check_your_destiny(f,c){
    let length = f.length;
    let newArray = f;


    if(length===1){
        return f[0];
    }
    else{
        let index = c%length;
        f.splice(index-1,1);

        // except index 0 and 1 because  when index is 0 we are going to strike(remove) last ch of the f so we dont have rotate the f,
        // it automatically arranged n the desired way  similarly when index is 1 we are going to remove 1 ch of the f 
        
        // except 0 and 1 we have to rotate the list to start next letter to strike
        if(index >1){
            newArray = f.slice(index-1).concat(f.slice(0, index-1));

        }

    
        // recursively calling the function until the list contains one ch that is answer
        return check_your_destiny(newArray,c);

    }

}
function removing_common_chars(){
    for(let ch of username){
        if(partnername.includes(ch)){
            partnerIndex = partnername.indexOf(ch);
            userIndex = usernameCopy.indexOf(ch);

            partnername.splice(partnerIndex,1);
            usernameCopy.splice(userIndex,1);
        }
    }

    return[...usernameCopy,...partnername];

}



function generalFlow(){

    
    username = usernameEl.value.toLowerCase().split("");
    partnername = partnernameEl.value.toLowerCase().split("");
    console.log(username);
    console.log(partnername);
    usernameCopy = [...username];

    if(username.length===0 && partnername.length===0){
        alert("enter your name and your partner name to check");
        resultTextEl.textContent = "";
        
    }

    else if(username.length===0 ){
        userErrorMsgEl.textContent = "*can't be empty field";
        partnernameErrorMsgEl.textContent = "";
        resultTextEl.textContent = "";
       

    }

    else if(partnername.length===0){
        userErrorMsgEl.textContent = "";
        partnernameErrorMsgEl.textContent = "*can't be empty field";
        resultTextEl.textContent = "";

    }
    else{
        spinnerEl.classList.toggle("display_none");
        userErrorMsgEl.textContent ="";
        partnernameErrorMsgEl.textContent = "";
        resultTextEl.textContent = "";
        
        let usList = removing_common_chars();
        let answer = check_your_destiny([...flames] ,usList.length);
        displayTheResult(answer);

    }
    
    
    
    

}













checkBtn.addEventListener("click",generalFlow);