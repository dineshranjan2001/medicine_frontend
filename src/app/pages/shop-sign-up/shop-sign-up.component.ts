import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-shop-sign-up',
  templateUrl: './shop-sign-up.component.html',
  styleUrls: ['./shop-sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopSignUpComponent implements OnInit {

  showOwnerSection:boolean=true;
  showShopSection:boolean=false;
  showRegisterBtn:boolean=false;
  showNextBtnSection:boolean=true;
  showImageIcon:boolean=true;
  showimagePreviewSection:boolean=false;
  checkStatusNumber:Number=0;
  preview:string="";

  nameChecker:RegExp=/^[a-zA-Z ]{3,20}$/;
  emailChecker:RegExp=/^[a-zA-Z0-9._\-]+[@][a-zA-Z.]+[a-z]{2,3}$/;
  phoneChecker:RegExp=/^[6789][0-9]{9}$/;
  addressChecker:RegExp=/^[A-Za-z0-9'\.\-\s\,]+$/;
  passwordChecker:RegExp=/^[0-9]{5-8}$/;

  constructor() {}
  onclick():void{
    if(this.nameChecker.test((<HTMLInputElement>document.getElementById('ownerFirstName')).value)&& this.nameChecker.test((<HTMLInputElement>document.getElementById('ownerLastName')).value) && this.phoneChecker.test((<HTMLInputElement>document.getElementById('ownerPhone')).value)){
        this.showOwnerSection=!this.showOwnerSection;
        this.showShopSection=!this.showShopSection;
        this.showNextBtnSection=!this.showNextBtnSection;
        this.showRegisterBtn=!this.showRegisterBtn;
        (<HTMLInputElement>document.getElementById('body')).style.height='125vh';
        (<HTMLInputElement>document.getElementById('image-section')).style.paddingTop='19%';
    }else if(!this.nameChecker.test((<HTMLInputElement>document.getElementById('ownerFirstName')).value)){
      alert("Please Give Valid Name...");
    }else if(!this.nameChecker.test((<HTMLInputElement>document.getElementById('ownerLastName')).value)){
      alert("Please Give Valid Name...");
    }else if(!this.phoneChecker.test((<HTMLInputElement>document.getElementById('ownerPhone')).value)){
      alert("Please Give Valid Phone Number...");
    }
  }
  backTo():void{
    this.showOwnerSection=!this.showOwnerSection;
    this.showShopSection=!this.showShopSection;
    this.showNextBtnSection=!this.showNextBtnSection;
    this.showRegisterBtn=!this.showRegisterBtn; 
    (<HTMLInputElement>document.getElementById('body')).style.height='100vh';
    (<HTMLInputElement>document.getElementById('image-section')).style.paddingTop='6% !important';
  } 
  selectFile(event: any){
    if(event.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.showImageIcon=!this.showImageIcon;
        this.showimagePreviewSection=!this.showimagePreviewSection;
        this.preview=event.target.result;
      }
    }
  }
  onSubmit():void{
    if(!this.nameChecker.test((<HTMLInputElement>document.getElementById('shopName')).value)){
      alert("Please Give Valid Name");
    }else if(!this.phoneChecker.test((<HTMLInputElement>document.getElementById('shopPhone')).value)){
      alert("Please Give Valid Phone Number...");
    }else if(!this.passwordChecker.test((<HTMLInputElement>document.getElementById('shopPassword')).value)){
      alert("Please Give Valid Password...");
    }else if(!this.addressChecker.test((<HTMLInputElement>document.getElementById('shopAddress')).value)){
      alert("Please Give Valid Address...");
    }else if((<HTMLInputElement>document.getElementById('shopPhoto')).value == ""){
      alert("Please Give Photo...");
    }
  }
  ngOnInit(): void {
    
  }
 
}
