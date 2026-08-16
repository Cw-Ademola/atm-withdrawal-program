let balance = 100000;
let withdrawal = 45000;

if (withdrawal <= 0) {
    console.log("Invalid withdrawal amount");
} else if (withdrawal > balance) {
    console.log("Insufficient funds");
} else if (withdrawal % 1000 !== 0) {
    console.log("Amount must be a multiple of ₦1,000");
} else {
    balance = balance - withdrawal;

    console.log("Withdrawal successful");
    console.log("Remaining balance: ₦" + balance);
}