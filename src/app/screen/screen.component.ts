import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HomeServiceService } from '../Service/home-service.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  public SingleShowId:any;
  public SingleShowData:any;
  constructor(private route:ActivatedRoute, private home_service:HomeServiceService,private router:Router){}

  ngOnInit() {
    this.SingleShowId = this.route.snapshot.paramMap.get('id');
    this.home_service.getShowById(this.SingleShowId)
    .subscribe((showResponse:any)=>{
      this.SingleShowData=showResponse ? showResponse:null;
    })
  }

  BackToMain(){
    this.router.navigate(['main']);
  }
}
