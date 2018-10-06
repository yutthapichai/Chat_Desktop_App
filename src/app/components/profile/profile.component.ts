import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  constructor(private userService: UserService) {

   }

  ngOnInit() {
    this.userService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  updateName() {

  }

  chooseImage() {

  }
}
