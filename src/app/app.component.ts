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
        const results = [];
        participants.forEach((participant, index) => {
            results[Math.floor(Math.random() * (index + 1))] = participant;
        });
        return results;
    }

    SecretSanta() {
        const participants = Object.assign([], this.ParticipantList);

        const _participants = this.RandomizeParticipants(participants);

        const _sort = _participants.map((participant, index, all) => {
            return {
                participant: participant,
                santa: this.RandomizeParticipants(all.filter(santa => santa.lastname !== participant.lastname)[0])
            };
        });

        /* Randomize Cloned Array */
        // for (let i = list.length - 1; i > 0; i--) {
        //   let j = Math.floor(Math.random() * (i + 1));
        //   let temp = list[i];
        //   list[i] = list[j];
        //   list[j] = temp;
        // }

        /* Assign Secret Santa */
        // for (let ii = 0; ii < list.length; ii++) {
        //   if (this.ParticipantList[ii].lastname !== list[ii].lastname) {
        //     _list.push(list[ii]);
        //   } else {
        //     _list.push({});
        //     _sort.push(list[ii]);
        //   }
        // }

        /* Fix Empty Slots */
        // for (let iii = 0; iii < _list.length; iii++) {
        //   if (_list[iii].firstname === undefined) {
        //     _list[iii] = _sort.pop();
        //   }
        // }

        /* Repopulate Array */
        // for (let iv = 0; iv < _sort.length; iv++) {
        //   if (_sort[iv].lastname !== undefined) {
        //     if (this.ParticipantList[iv].lastname === _list[iv].lastname) {
        //       _list[iv] = _list.pop();
        //     }
        //   }
        // }

        /* Last Varification */
        // for (let v = 0; v < _list.length; v++) {
        //   if (this.ParticipantList[v].lastname === _list[v].lastname) {
        //     this.SecretSanta();
        //     return;
        //   }
        // }

        this.SecretSantaList = _sort;
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
