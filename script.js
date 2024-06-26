let usernameEl = document.getElementById("user__input");
let partnernameEl = document.getElementById("partner__name--input");
let checkBtn = document.getElementById("check__btn");
let resultContEl = document.getElementById("result__cont");
let userErrorMsgEl = document.getElementById("usernameErr");
let partnernameErrorMsgEl = document.getElementById("partnernameErr");
let resultTextEl = document.getElementById("result");


let username;
let partnername;
let usernameCopy;

const flames = ["f","l","a","m","e","s"]



// def removing_common_chars():
//     for ch in me:
//         if ch in you:
//             you_index = you.index(ch)
//             me_index = me_copy.index(ch)
//             you.pop(you_index)
//             me_copy.pop(me_index)

//     return [*me_copy,*you]




// def check_your_destiny(f,c):
//     length = len(f)
    
//     if length == 1:
//         return flames[0]
//     else:
//         index = c % length 
//         f.pop(index-1)
//         print(f)
//         return check_your_destiny(f,c)




function displayTheResult(answer){
    switch (answer) {
        case "f":
            resultTextEl.textContent = `The future tells that ${usernameEl.value} and ${partnernameEl.value} are going to be good friends.`
            break;
        case "l":
            resultTextEl.textContent = `The future tells that ${usernameEl.value} and ${partnernameEl.value} are going to be LOVERS.`
            break;
        case "a":
            resultTextEl.textContent = `The future tells that ${usernameEl.value} and ${partnernameEl.value} are going to be affectionate with each other.`
            break;
        
        case "m":
            resultTextEl.textContent = `The future tells that ${usernameEl.value} and ${partnernameEl.value} are going to get married soon.`
            break;
        case "e":
            resultTextEl.textContent = `The future tells that ${usernameEl.value} and ${partnernameEl.value} are ENEMYS.`
            break;
        case "s":
            resultTextEl.textContent = `The future tells that ${usernameEl.value} and ${partnernameEl.value} are SIBILINGS.`
            break;
        default:
            resultTextEl.textContent = "";
    }
}

function check_your_destiny(f,c){
    let length = f.length;

    if(length===1){
        return f[0];
    }
    else{
        let index = c%length;
        f.splice(index-1,1);
        return check_your_destiny(f,c);

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
    username = usernameEl.value.split("");
    partnername = partnernameEl.value.split("");
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
        userErrorMsgEl.textContent ="";
        partnernameErrorMsgEl.textContent = "";
        resultTextEl.textContent = "";
        let usList = removing_common_chars();
        let answer = check_your_destiny([...flames] , usList.length);
        displayTheResult(answer);

    }
    
    
    
    

}













checkBtn.addEventListener("click",generalFlow);