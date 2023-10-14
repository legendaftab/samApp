import { Component } from '@angular/core';
import { instaList } from 'src/app/core/interface/alldata';
import { HomeSService } from 'src/app/core/service/home-s.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  info:instaList[]=[];

  constructor(private homeS:HomeSService){
    this.getApi();
  }

  getApi(){
   this.homeS.getData().subscribe((res:any)=>{
    this.info=res.data;
   })

 

}

}
