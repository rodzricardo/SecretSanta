import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public newParticipant = '';

    DemoList = [
        {firstname: 'Luke', lastname: 'Skywalker'},
        {firstname: 'Lia', lastname: 'Skywalker'},
        {firstname: 'Luke', lastname: 'Wilson'},
        {firstname: 'Owen', lastname: 'Wilson'},
        {firstname: 'Eddie', lastname: 'Murphey'},
        {firstname: 'Charlie', lastname: 'Murphey'},
        {firstname: 'Bruce', lastname: 'Wayne'}
    ];

    ParticipantList = [];
    SecretSantaList = [];

    RandomizeParticipants(participants) {
        for (let i = participants.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = participants[i];
            participants[i] = participants[j];
            participants[j] = temp;
        }

        return participants;
    }

    SecretSanta() {
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

        this.SecretSantaList = _participants;
    }

    AddParticipant() {
        const newParticipant = this.newParticipant.split(' ');

        this.ParticipantList.push({
            firstname: newParticipant[0],
            lastname: newParticipant[1]
        });

        this.newParticipant = '';
        // document.querySelector('.newParticipant').focus();
    }

    DemoLoad() {
        this.ParticipantList = this.DemoList;
    }
}
