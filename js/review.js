var user = {}; // empty object
var name = prompt ('Enter name: ');
console.log({name});
console.log(!!name);
console.log(isNaN(name));

// if (name ==='' || name === ' ' || parseInt(name)) {
//     alert('Enter Valid Name');
// } else {
//     user.name = name;
// }

excludedName = ['poopface', 'idiot'];
var isExcluded = console.log(excludedName.find(function(excluded) {
    return excluded === name;
}))

if(name && isNaN(name) && !isExcluded) {
    user.name = name;
    var hp = prompt('Enter your hp: ');
    console.log(!!hp);
    console.log(typeof hp);
    console.log(parseInt(hp));
    console.log(isNaN(parseInt(hp)));
    
    if (hp && !isNaN(parseInt(hp))) {
        user.power = parseInt(hp);
    } else{
        alert('Enter valid hp');
    }
} else {
    alert('Enter Valid Name');
}

//ternary

// (name === '' || name === ' ' || parseInt(name))?
//      alert ('enter Valid Name') :
//      user.name = name;