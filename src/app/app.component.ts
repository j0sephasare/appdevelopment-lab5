import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding-app';

  count:number=0;
  onClick(){
   this.count++;
  }

hideLabell:boolean=true;

showlabel(){
if(this.hideLabell){
  this.hideLabell= false;
}else{
  this.hideLabell=true;
}
}


}
