import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  active = false;
  
  mostrar(){
    if(this.active === false){
      document.getElementById('nav-menu').classList.add("mostrar");
      document.body.classList.add("mostrar");
      this.active = true;
    }else{
      document.getElementById('nav-menu').classList.remove("mostrar");
      document.body.classList.remove("mostrar");
      this.active = false;
    }
  
  }


    
  
}
