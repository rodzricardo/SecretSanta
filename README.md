# SecretSanta

[![Build Status](https://travis-ci.org/cowglow/SecretSanta.svg?branch=master)](https://travis-ci.org/cowglow/SecretSanta)
Angular 7.1.0

Have you ever had an interview question that you couldn't answer?

That's what this project is all about.

For me, it was a humbling experience. But it ignited a fire that fueled my search for a solution.

The question was how would I sort a list of participants in of a [Secret Santa](https://en.wikipedia.org/wiki/Secret_Santa) game and  ensure that siblings (i.e. people with the same last name) would not be matched with one another. So Luke Skywalker wouldn't be paired with his sister Leia Skywalker.

The original project was generated with [yo angular generator](https://github.com/yeoman/generator-angular) version 0.12.1. But since then, Angular has evolved and Bower has been replaced by Yarn. So I modernized it.

And refactored once again during a session at the #jscc19

### The code
This is what I came up with. We populate the `ParticipantList` array with simple objects.
```
{
    firstname: 'Luke',
    lastname: 'Skywalker'
}
```
Because we're going to try to keep siblings from being each others secret santa. The results will be pushed into our 
second array `SecretSantaList`


```
$scope.ParticipantList = [];
$scope.SecretSantaList = [];

$scope.RandomizeParticipants = function (participants) {
    for (let i = participants.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = participants[i];
        participants[i] = participants[j];
        participants[j] = temp;
    }
    
    return participants;
}

$scope.SecretSanta = function() {
    const participants = Object.assign([], this.ParticipantList);
    const _participants = this.RandomizeParticipants(participants);
    
    for (let iv = 0; iv < _participants.length; iv++) {
        if (this.ParticipantList[iv].lastname === participants[iv].lastname) {
            participants[iv] = participants.pop();
        }
    }
    
    // Validate Sort
    for (let v = 0; v < _participants.length; v++) {
        if (this.ParticipantList[v].lastname === _participants[v].lastname) {
            this.SecretSanta();
            return;
        }
    }
    
    // Validate length match
    if (_participants.length !== this.ParticipantList.length) {
        this.SecretSanta();
        return;
    }
    
    return _participants;
};
```

### About me

I'm American living and working in Germany.

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
