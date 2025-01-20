const baseUrl="https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";

const genBtn=document.querySelector(".sub");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
// accesi4ng country li4sts


// for(country in countryList){
//     console.log(country, countryList[country]);
// }

const dropDowns=document.querySelectorAll(".drop select");
console.log(dropDowns);

for (const select of dropDowns) {

    for (const currCode in countryList) {
        let newOp=document.createElement("option");
        newOp.innerText=currCode;
        newOp.value=currCode;
    
        if(select.name==="from" && currCode==="INR"){
            newOp.selected="selected";
        }

        if(select.name==="to" && currCode==="USD"){
            newOp.selected="selected";
        }

        select.append(newOp);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}




const updateFlag=(ele)=>{

    let currCo=ele.value;
    let coCode=countryList[currCo];
    console.log(coCode);
    let newSrc=`https://flagsapi.com/${coCode}/flat/64.png`;
    let newImg=ele.parentElement.querySelector("img");
    newImg.src=newSrc;
    // newImg.setAttribute("src",newSrc);

}


console.log(genBtn.innerText);

console.log(fromCurr.value+" "+toCurr.value);

let result=document.querySelector(".res p");

const ans=0;

genBtn.addEventListener("click",async (evnt)=>{
    evnt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amVal=amount.value;
    if(amVal===""|| amVal< 1){
        amVal=1;
        amount.value="1";
    }


    const URL=`${baseUrl}/${fromCurr.value}_${toCurr.value}.json`;

    let response=await fetch(URL);
    let data= await response.json();
    let rate=data["rate"];
    let finalrate=(amVal*rate);
    console.log(finalrate);
    result.innerText=`${amVal} ${fromCurr.value} = ${finalrate} ${toCurr.value}`;

})



