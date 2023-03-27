import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Welcome To MediOrder';

  constructor(
    private readonly router:Router,
    private readonly titleService: Title
  ){}
  ngOnInit(): void {
    
  }
}
