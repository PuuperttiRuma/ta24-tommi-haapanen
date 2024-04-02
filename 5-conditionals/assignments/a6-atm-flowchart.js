const account = {
  balance: -1,
  checkBalance: true,
  isActive: true
};

if (account.checkBalance){
  if (account.isActive && account.balance > 0){
    console.log("Current balance:", account.balance);
  } else if (!account.isActive) {
    console.log("Your account is not active.");        
  } else if (account.balance === 0){
    console.log("Your account is empty.");        
  } else {
    console.log("Your balance is negative.");
        
  }
} else {
  console.log("Have a nice day!");    
}