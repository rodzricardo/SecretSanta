# SecretSanta

Have you ever gotten an interview question that you couldn't answer. This is what this project is all about. 
That experience was humbling for me. But it also ignited a fire inside which fuel my search for an answer.

The question was how I would sort a list of people in a [Secret Santa](https://en.wikipedia.org/wiki/Secret_Santa) game and 
ensure that siblings (i.e. people with the same last name) wouldn't be matched with one another. So Luka Skywalker 
wouldn't give a gift to his sister Lea Skywalker. 

The original project was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1. But since then, Angular has evolved and Bower has been replaced by Yarn. So I modernized it.

### The code
This is what I came up with. We populate the `EmployeeList` with simple objects.
```
{
    firstname: 'Luke',
    lastname: 'Skywalker'
}
```
Because we're going to try to keep siblings from being each others secret santa. The results will be pushed into our 
second array `SecretSantaList`


```
$scope.EmployeeList = [];
$scope.SecretSantaList = [];

$scope.SecretSanta = function() {
    var list = angular.copy($scope.EmployeeList);
    var _list = [];
    var _sort = [];

    /* Randomize Cloned Array */
    for (var i = list.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }

    /* Assign Secret Santa */
    for (var ii = 0; ii < list.length; ii++) {
        if ($scope.EmployeeList[ii].lastname !== list[ii].lastname) {
            _list.push(list[ii]);
        } else {
            _list.push({});
            _sort.push(list[ii]);
        }
    }

    /* Fix Empty Slots */
    for (var iii = 0; iii < _list.length; iii++) {
        if (_list[iii].firstname === undefined) {
            _list[iii] = _sort.pop();
        }
    }

    /* Repopulate Array */
    for (var iv = 0; iv < _sort.length; iv++) {
        if (_sort[iv].lastname !== undefined) {
            if ($scope.EmployeeList[iv].lastname === _list[iv].lastname) {
                _list[iv] = _list.pop();
            }
        } 
    }

    /* Last Varification */
    for (var v = 0; v < _list.length; iv++) {
        if ($scope.EmployeeList[v].lastname === _list[v].lastname) {
            $scope.SecretSanta();
            return;
        }
    }
    $scope.SecretSantaList = _list;
};
```

### About me

I'm a mercenary coder at [tollwerk GmbH](https://github.com/tollwerk)

* [@cowglow](https://twitter.com/cowglow) - Say 'hi' on twitter!
* [YouTube](https://youtube.com/c/cowglow) - I'm a filmmaker
* [GitHub](https://github.com/cowglow) - but I know how to code


### Todos

 - Fork it
 - Code it!
 - Do it on your own!

License
----

MIT