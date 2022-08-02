import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  firstName:any;
  lastName: any;
  DOB:any;
  phoneNumber:any;
  
  constructor() { }

  ngOnInit(): void {
  }
  canexit(){
    if(this.firstName || this.lastName || this.DOB || this.phoneNumber){
       return confirm("You have unsaved changes. Do you really want to discard these changes?");
    } else{
      return true;
    }
  
  }

}
