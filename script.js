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
(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);



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
(function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})("my name is Tamil");

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
(function(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);


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
(function(n) {
    for (let i = 2; i <= n; i++) {
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
})(34);


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
(function(arr) {
    function isPalindrome(str) {
        let len = str.length;
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    
    for (let i = 0; i < arr.length; i++) {
        let ans = isPalindrome(arr[i].toString());
        if (ans) {
            console.log(arr[i]);
        }
    }
})([121, 123, 1331]);

// !f.Return median of two sorted arrays of the same size.
// Anonymous:
(function(nums1, nums2) {
    let s1 = nums1.length;
    let s2 = nums2.length;
    let index = s1 + s2;

    if (s1 == 0) {
        if (s2 % 2 == 1) {
            return nums2[Math.floor(index / 2)];
        } else {
            return (nums2[Math.floor(index / 2) - 1] + nums2[Math.floor(index / 2)]) / 2;
        }
    }

    for (let i = 0; i < index / 2 + 1; i++) {
        nums1.push(nums2[i]);
    }

    nums1.sort((a, b) => a - b);

    if (index % 2 == 1) {
        return nums1[Math.floor(index / 2)];
    } else {
        return (nums1[Math.floor(index / 2) - 1] + nums1[Math.floor(index / 2)]) / 2;
    }

})([1, 2, 3], [4, 5, 6]);

// IIFE
(function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }
   
});

// ! g. Remove duplicates from an array:
// Anonymous function
(function(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    console.log(uniqueArray);
})([1, 1, 2, 3, 4, 5]);


// IIFE
(function(array) {
    let uniqueArray = [...new Set(array)];
    console.log(uniqueArray);
})([1, 1, 2, 3, 4, 5]);

// ! h. Rotate an array by k times:

// Anonymous function
(function(arr, k) {
    let len = arr.length;
    let rotatedArray = [];

    for (let i = 0; i < len; i++) {
        let newIndex = (i + k) % len;
        rotatedArray[newIndex] = arr[i];
    }

    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);

// IIFE
(function(a, n, k) {
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k]);
        } else {
            console.log(a[i - k]);
        }
    }
})([1, 2, 3, 4, 5], 5, 2);



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
