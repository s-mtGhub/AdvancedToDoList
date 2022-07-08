
const RxnInc=(rxn,addon)=>{
    console.log("emoji",rxn);
    var emoji = "🤔😃";
      if (rxn < addon ) emoji=("🤔😃");
        else if (rxn < 3 + addon) emoji = "🤔😅";
        else if (rxn < 6+addon) emoji = "🤔😟";
        else if (rxn < 10+addon) emoji = "🤔🤕";
        else if (rxn < 13+addon) emoji = "🤔🥲";
        else if (rxn < 16+addon) emoji = "🤔😵‍💫";
        else if (rxn < 19+addon) emoji = "🤔😨";
        else emoji = "🤔🤒🤯";
    return(emoji);
    
}
export default RxnInc;