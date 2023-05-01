import { Component ,Input,OnChanges ,SimpleChanges,Output,EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,OnInit{
  show=false;
  cart=0;
  constructor(){
   
  }
  ngOnInit(): void {
   
  }
  cartclass={
    background:'yellow',
    color:'black'
  }

  darkClass={
    dark:false
  }
@Input() data:String[]=[];
@Input() lenght:any;
@Output () GetValue = new EventEmitter<string>();
@Output () Remove = new EventEmitter<any>();
@Output () Last = new EventEmitter<any>();
ngOnChanges(changes: SimpleChanges){
  let res = document.getElementById("cancle")
  res?.click();  
if(this.lenght >= 7){
this.show=true;
this.darkClass.dark=true;

}
else{
  this.show=false
  this.darkClass.dark=false;
  
}
}

carts(){
  if(this.cart %2 != 0){
    this.cartclass['background']='blue'
}
else{
  this.cartclass['background']='yellow'
}
}

addCart(){
  this.cart=this.cart+1;
  this.btn=false
  this.carts();
  
}
removeCart(){
  
  if(this.cart ==0){
    this.btn=true
    this.carts();
  }
  else{
    this.cart=this.cart-1;
    this.btn=false
    this.carts();
  }
}
btn=false;

}

