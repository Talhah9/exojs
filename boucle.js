'use strict';

/**
* Exercies1
*/

var array = [1,2,3,5,8];

var result = '\n';

for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < 11; j++) {
        result += (array[i]*j) + ' ';
    }
    result += '\n'
}

/**
* Exercies2
*/

var list = document.createElement('ul');
for(var i = 1; i <= 10; i++) {
    var multiplication = document.createElement('li');
    multiplication.textContent = i + ' x 5 = ' + (i * 5);
    list.appendChild(multiplication);
}
document.body.appendChild(list);

/**
* Exercies3
*/

var nb = 0;
while(true) {
    nb++;
    console.log(5 * nb);
    if(nb == 10){
        break;
    }
}

/**
* Exercies4
*/

var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multi5 = table.map(x => x * 5);
console.log(multi5);

/**
* Exercies5
*/

var obj = {
    'name': 42,
    'age': 42
  }
  var compute = 1;
  for (var key in obj) {
    compute *= obj[key]
  }
  console.log(compute);
  
  // 6.
  
  var nbr = [45, 86, 1, 4, -9];
  for (var i = 0; i < nbr.length; i++) {
    for (var j = 0; j < nbr.length; j++) {
      if (nbr[i] < nbr[j]) {
        var tmp = nbr[i];
        nbr[i] = nbr[j];
        nbr[j] = tmp;
        j = 0;
      }
    }
  }
  