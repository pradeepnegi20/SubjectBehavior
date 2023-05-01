import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task2';
  constructor(){
    this.arrary=['Monday','Tuesday','Friday']
  }
  len:any;
ngOnInit(): void {

}
 arrary:String[] =[]
 
  


  UpdateValue(item:string){
  
    this.arrary.push(item)
    console.log(this.arrary)
    this.len=this.arrary.length
console.log(item)
  }
  remove(data:boolean){
    if(data){
      console.log(data)
      this.arrary.shift()
      this.len=this.arrary.length
    }
  }
  last(data:boolean){
    if(data){
      this.arrary.pop()
      this.len=this.arrary.length
    }
  }

}
