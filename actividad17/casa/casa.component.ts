import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent {
  constructor(private router:Router){

  }

  primero(){
    this.router.navigate(['/primero/1']);

  }
  segundo(){
    this.router.navigate(['/segundo/2']);

  }
  tercero(){
    this.router.navigate(['/tercero/3']);

  }
  cuarto(){
    this.router.navigate(['/cuarto/4']);

  }
  quinto(){
    this.router.navigate(['/quinto/5']);

  }

}
