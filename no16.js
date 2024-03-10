//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
var GuestList1 = ["Sara", "Kisa", "Khadija", "Mahak"];
var canNotAttend = "Ali";
var NewGuest = "Nadir";
GuestList1[GuestList1.indexOf(canNotAttend)] = NewGuest;
console.log(GuestList1);
