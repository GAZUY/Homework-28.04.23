/*
let howManyYears = parseInt(prompt("Сколько вам лет") as string)
if (0 < howManyYears && howManyYears < 12) {
  alert("ребёнок")
}else if (12 <= howManyYears && howManyYears < 18) {
  alert("подросток");
}else if (18 <= howManyYears && howManyYears <= 60) {
  alert("взрослый");
}else if (60 < howManyYears) {
  alert("пенсионер");
}else {
  alert('Данные с ошибкой')
}


let button = +(prompt("введите цифру от 0 до 9")as string)
  switch (button) {
   case 1:
    alert("!")
    break
      case 2:
    alert("@")
    break
      case 3:
    alert("#")
    break
      case 4:
    alert("$")
    break
      case 5:
    alert("%")
    break
      case 6:
    alert("^")
    break
       case 7:
    alert("&")
    break
       case 8:
    alert("*")
    break
       case 9:
    alert("(")
    break
       case 0:
    alert(")")
    break
      default:
    alert("НЕ надо БОЛЬШЕ ОДНОЙ кнопки нажимать!");
}



let threeDigits = +(prompt("Введите целое положительное трехзначное число")as string)
let digitsOne = threeDigits % 10
let digitsTwo = ((threeDigits-digitsOne)/10)% 10
let digitsTree = ((((threeDigits-digitsOne)/10)-digitsTwo)/10)% 10
if (digitsOne == digitsTwo && digitsOne == digitsTree) {
alert ("все цифры равны")
}else if (digitsTree == digitsTwo && digitsTree != digitsOne) {
  alert ("равны первая и вторая цифры")
}else if (digitsOne == digitsTwo && digitsOne != digitsTree) {
  alert ("равны вторая и третья цифры")
}else if (digitsOne == digitsTree && digitsOne != digitsTwo) {
  alert ("равны первая и третья цифры")  
}else {
  alert ("все цифры разные")
}




let leapYear = +(prompt("Введите год") as string)
if(((leapYear % 4 == 0) && (leapYear % 100 != 0)) || (leapYear % 400 == 0)){
    alert ("Високосный год")
} else {
   alert ("НЕ високосный год")
}



let palindrome = +(prompt("Введите пятизначное число")as string)
let palindrome1 = palindrome % 10
let palindrome2 = ((palindrome-palindrome1)/10)% 10
let palindrome3 = ((((palindrome-palindrome1)/10)-palindrome2)/10)% 10
let palindrome4 = ((((((palindrome-palindrome1)/10)-palindrome2)/10)-palindrome3)/10)%10
let palindrome5 = ((((((((palindrome-palindrome1)/10)-palindrome2)/10)-palindrome3)/10)-palindrome4)/10)%10
if (palindrome1 == palindrome5 && palindrome4 == palindrome2) {
  alert ("ПАЛИНДРОМ")
}
else {
  alert ("НЕ палиндром")
}



let summa_usd = +(prompt ("введите сумму в USD")as string)
let currency_selection = prompt ("введите валюту для перевода: EUR, UAH, AZN")
const usd_azn = 1.7
const usd_uah = 36.81
const usd_eur = 0.917
if (currency_selection === "EUR"||currency_selection ==="eur"||currency_selection === "eUR"||currency_selection === "EUr"||currency_selection === "EuR") {
  alert("Сумма в EUR: " + (summa_usd*usd_eur));
}else if (currency_selection === "UAH"||currency_selection === "uah"||currency_selection === "uAH"||currency_selection === "UAh"||currency_selection === "UaH") {
  alert("Сумма в UAH: " + (summa_usd*usd_uah));
}else if (currency_selection === "AZN"||currency_selection === "azn"||currency_selection === "aZN"||currency_selection === "AZn"||currency_selection === "AzN") {
  alert("Сумма в AZN: " + (summa_usd*usd_azn));
}else {
 alert ("Ошибка в данных")
}



let purchaseAmount = +(prompt ("введите сумму покупки")as string)
if (200 <= purchaseAmount && purchaseAmount < 300) {
  alert ("к оплате со скидкой " + (purchaseAmount * 0.97));
}else if (300 <= purchaseAmount && purchaseAmount < 500) {
  alert ("к оплате со скидкой 5%:  " + (purchaseAmount * 0.95))
}else if (500 <= purchaseAmount) {
  alert ("к оплате со скидкой 7%:  " + (purchaseAmount * 0.93))
}else {
  alert ("К оплатe без скидки  " + purchaseAmount);
}



let circumferenceLength = +(prompt ("введите длину окружности")as string)
let perimeterSquare = +(prompt ("введите периметр квадрата")as string)
if ((circumferenceLength / 3.14) == (perimeterSquare / 4)) {
  alert ("ваша окружность впишется в квадрат")
}
else {
  alert ("ваша окружность НЕ впишется в квадрат")
}




let the_first_question = prompt ("ЭКЗАМЕНАЦИОННЫЙ ВОПРОС. Какой предмет сдаёте? Введите ответ из трёх вариантов:  Математика  Информатика  Физика");
let the_second_question = prompt ("ЭКЗАМЕНАЦИОННЫЙ ВОПРОС. Какого цвета учебник? Введите ответ из трёх вариантов:  красный  жёлтый  синий");
let the_third_question = prompt ("ЭКЗАМЕНАЦИОННЫЙ ВОПРОС. Как зовут преподователя? Введите ответ из трёх вариантов:  Василий Иванович  Петька  Анка-пулемётчица");
const the_first_answer = "Информатика";
const second_answer = "синий";
const third_answer = "Василий Иванович";
if ( the_first_answer === the_first_question && second_answer === the_second_question && third_answer === the_third_question ) {
  alert ("Вы - отличник  6 баллов")
}else if ( the_first_answer === the_first_question && second_answer === the_second_question && third_answer !== the_third_question ) {
  alert ("Неплохо  4 балла")
}else if ( the_first_answer === the_first_question && second_answer !== the_second_question && third_answer === the_third_question ) {
  alert ("Неплохо  4 балла")
}else if ( the_first_answer !== the_first_question && second_answer === the_second_question && third_answer === the_third_question ) {
  alert ("Неплохо  4 балла")
}else if ( the_first_answer !== the_first_question && second_answer !== the_second_question && third_answer === the_third_question ) {
  alert ("Надо подучиться  2 балла")
}else if ( the_first_answer === the_first_question && second_answer !== the_second_question && third_answer !== the_third_question ) {
  alert ("Надо подучиться  2 балла")
}else if ( the_first_answer !== the_first_question && second_answer === the_second_question && third_answer !== the_third_question ) {
  alert ("Надо подучиться  2 балла")
}else {
  alert ("Проверьте введение данных как в вариантах. Или вы провалили экзамен")
}
*/



  let entered_day = +(prompt("введите день")as string)
    let entered_mounth = +(prompt("введите мясяц")as string)
    let entered_year = +(prompt("введите год")as string)
    let max_day;
    let next_day;
    let next_mounth;
    let next_year;
    if (entered_mounth == 4 || entered_mounth == 6 || entered_mounth == 9 || entered_mounth == 11) {
      max_day = 30;
      if (entered_day < max_day) {
        next_day = entered_day + 1;
        next_mounth = entered_mounth;
        next_year = entered_year;
      } else if (entered_day == max_day) {
        next_day = 1;
        next_mounth = entered_mounth + 1;
        next_year = entered_year;
      }
    } else if (entered_mounth == 2) {
      if (entered_year % 400 == 0 || (entered_year % 4 == 0 && entered_year % 100 != 0)) {
        max_day = 29;
        if (entered_day < max_day) {
          next_day = entered_day + 1;
          next_mounth = entered_mounth;
          next_year = entered_year;
        } else if (entered_day == max_day) {
          next_day = 1;
          next_mounth = entered_mounth + 1;
          next_year = entered_year;
          
        }
      } else {
        max_day = 28;
        if (entered_day < max_day) {
          next_day = entered_day + 1;
          next_mounth = entered_mounth;
          next_year = entered_year;
        } else if (entered_day == max_day) {
          next_day = 1;
          next_mounth = entered_mounth + 1;
          next_year = entered_year;
        }
      }
    } else {
      max_day = 31;
      if (entered_mounth == 12 && entered_day == max_day) {
        next_day = 1;
        next_mounth = 1;
        next_year = entered_year + 1;
      } else {
        if (entered_day < max_day) {
          next_day = entered_day + 1;
          next_mounth = entered_mounth;
          next_year = entered_year;
        } else if (entered_day == max_day) {
          next_day = 1;
          next_mounth = entered_mounth + 1;
          next_year = entered_year;
        }
      }
    }
    alert(next_day +":"+ next_mounth +":"+ next_year);
    
