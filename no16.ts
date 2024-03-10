//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
let GuestList1 : string[] =  ["Sara", "Kisa", "Khadija", "Mahak"];
let canNotAttend : string = "Ali"
let NewGuest : string = "Nadir"
GuestList1[GuestList1.indexOf(canNotAttend)] = NewGuest;
console.log(GuestList1);