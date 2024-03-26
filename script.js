// ! Q1:Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array:

// Anonymous function
var array=[1,2,3,4,5,6,7,8,9];
(function (arr) {
    for(var i = 0 ; i< arr.length ; i++){
          if(arr[i]%2!=0){
             console.log(arr[i]);
          } 
     }          
})(array);

//IIFE
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
})(array);


// b. Convert all the strings to title caps in a string array:

// Anonymous function
var str="my name is Tamil";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   console.log(str.join(' '));
})(str);

//IIFE
var str = "my name is Tamil";
(function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})(str);

// ! c. Sum of all numbers in an array:

// Anonymous function
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
(function (arr) {
   for(let i=0; i<arr.length; i++) {
     sum=sum+arr[i];
   }
   console.log(sum);
})(a);

//IIFE
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
(function(a) {
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    console.log(sum);
})(a);


// ! d. Return all the prime numbers in an array:

// Anonymous function
let n=34;
(function (n) {
   for(let i=2; i<=n; i++) {
      let flag=0;
      for(let j=2; j<i; j++) {
         if(i%j==0) {
            flag=1;
            break;
         }
      }
      if(flag==0) {
         console.log(i);
      }
   }
})(n);

//IIFE
let n2 = 34;
(function(n) {
    for (let i = 2; i <= n2; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log(i);
        }
    }
})(n2);



// ! e. Return all the palindromes in an array:

// Anonymous function
function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

(function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let ans = isPalindrome(arr[i].toString());
        if (ans) {
            console.log(arr[i]);
        }
    }
})([121, 123, 1331]);

//IIFE
function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

(function(arr, n) {
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans) {
            console.log(arr[i]);
        }
    }
})([121, 123, 1331], 3);


// ! 2.Do the below programs in arrow functions.

// a. Print odd numbers in an array
var y=[1,2,3,4,5,6,7];
var odd = (array) => {
   let arr = [];
   for(let i=0; i<array.length; i++) {
     if(array[i] % 2 !== 0) {
      arr.push(array[i]);
     }
   }
   return arr;
};
console.log(odd(y));

// ! b. Convert all the strings to title caps in a string array:
var str = "my name is tamil";
let def = (str) => {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
};
console.log(def(str));

// ! c. Sum of all numbers in an array:
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi = (arr) => {
   for(let i=0; i<arr.length; i++) {
     sum = sum + arr[i];
   }
   return sum;
};
console.log(ghi(a));

// ! d. Return all the prime numbers in an array:
let nn = 34;
let l = (n) => {
   for(let i = 2; i <= nn; i++) {
      let flag = 0;
      for(let j = 2; j < i; j++) {
         if(i % j == 0) {
            flag = 1;
            break;
         }
      }
      if(flag == 0) {
         console.log(i);
      }
   }
};
console.log(l(nn));
