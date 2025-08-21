class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Withdraw amount must be positive.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient balance!");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawn: $${amount}. New balance: $${this.balance}`);
  }


  getBalance(): number {
    return this.balance;
  }
}


const myAccount = new BankAccount(100);
console.log("Initial balance:", myAccount.getBalance());

myAccount.deposit(50);    
myAccount.withdraw(30);   
myAccount.withdraw(150);  
console.log("Final balance:", myAccount.getBalance());
