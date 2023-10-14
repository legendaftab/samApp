import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { data } from 'src/app/core/class/class';
import { HomeSService } from 'src/app/core/service/home-s.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {



constructor(private router:Router,private homeS:HomeSService,private toaster:ToastrService){

}

loginObj:data=new data();

loginData(){
  this.homeS.saveData(this.loginObj).subscribe((res:any)=>{
    console.log(res);
    localStorage.setItem('token',res.token);
    if(res.message){
   this.toaster.success("login successfully");
   this.router.navigateByUrl('/home');
    }else{
      this.toaster.error("wrong essential");
    }
  },error=>{
    this.toaster.warning(JSON.stringify(error.error));
  })
}



}
