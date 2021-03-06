import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { trigger,style,transition,animate,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '200ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class UsersComponent implements OnInit {

  users: Object;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe( (data) => {
      this.users = data;
    })
  }

}
