// ------------------ Kilometer To Meter Problem

function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  if (kilometer < 0 || kilometer == undefined) {
    return "sorry, invalid input";
  }
  return meter;
}

var result = kilometerToMeter(1);
console.log(result);

//--------------------- budget calculator problem

function budgetCalculator(watch, mobile, laptop) {
  var totalWatchCost = watch * 50;
  var totalMobileCost = mobile * 100;
  var totalLaptopCost = laptop * 500;
  totalCost = totalWatchCost + totalMobileCost + totalLaptopCost;
  if (watch == undefined || mobile == undefined || laptop == undefined) {
    return "watch value is undefined";
  } else if (watch < 0 || mobile < 0 || laptop < 0) {
    return "input a valid number";
  }
  return totalCost;
}

var result = budgetCalculator(1, 1, 1);
console.log(result);

//-------------- hotelCost problem

function hotelCost(days) {
  var totalCost = 0;
  if (days <= 10) {
    totalCost = days * 100;
  } else if (days <= 20) {
    var first10days = 10 * 100;
    var remaining = days - 10;
    var after10days = remaining * 80;
    totalCost = first10days + after10days;
  } else {
    var first10days = 10 * 100;
    var after10Days = 10 * 80;
    var remaining = days - 20;
    var lastFewDays = remaining * 50;

    totalCost = first10days + after10Days + lastFewDays;
  }
  if (days == undefined || days < 0) {
    return "your input is invalid";
  }
  return totalCost;
}

var result = hotelCost(21);
console.log(result);

// ---------------------------megaFriend problem

function megaFriend(friendsName) {
  var largestName = friendsName[0];
  for (var i = 0; i < friendsName.length; i++) {
    var element = friendsName[i];
    if (element.length > largestName.length) {
      largestName = element;
    }
  }
  return largestName;
}

var result = megaFriend(["a", "ab", "abc", "abcd", "ABCDEF", "abcde"]);
console.log(result);
