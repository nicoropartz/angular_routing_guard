import { Component, OnInit } from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  selector: 'app-add-salles',
  templateUrl: './add-salles.component.html',
  styleUrls: ['./add-salles.component.css']
})
export class AddSallesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
