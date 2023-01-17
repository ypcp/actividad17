import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quinto',
  templateUrl: './quinto.component.html',
  styleUrls: ['./quinto.component.css']
})
export class QuintoComponent implements OnInit {
  id:any="";
  codigo:number=0;
  desc:string="";
  pv:number=0;
  pc:number=0;
  exis:number=0;

  constructor(private router: Router, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get("id");
    if(this.id === "1"){
      this.codigo=1;
      this.desc="galletas chokis";
      this.pv=10;
      this.pc=15;
      this.exis=5;


    }
    if(this.id === "2"){
      this.codigo=2;
      this.desc="mermelada de fresa";
      this.pv=65;
      this.pc=80;
      this.exis=100;


    }
    if(this.id === "3"){
      this.codigo=3;
      this.desc="aceites";
      this.pv=18;
      this.pc=20;
      this.exis=100;
    }
    if(this.id === "4"){
      this.codigo=4;
      this.desc="palomitas de maiz";
      this.pv=12;
      this.pc=15;
      this.exis=100;
    }
    if(this.id === "5"){
      this.codigo=5;
      this.desc="doritos";
      this.pv=5;
      this.pc=8;
      this.exis=100;
    }
    
  }
}
