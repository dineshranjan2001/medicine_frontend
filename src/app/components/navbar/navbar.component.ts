import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {  
  currentUrl:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentUrl=this.router.url;
    console.log(this.currentUrl);
  }

}
