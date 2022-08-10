import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.scss']
})
export class VotetakerComponent  {
    agreed = 0;
    disagreed = 0;
    voters = ['Dr IQ', 'Celeritas', 'Bombasto'];

    onVoted(agreed: boolean) {
        if (agreed) {
            this.agreed++;
        } else {
            this.disagreed++;
        }
    }

}
