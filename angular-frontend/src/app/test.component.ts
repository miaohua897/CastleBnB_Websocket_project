
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector:'test',
    standalone:true,
    imports:[CommonModule],
    templateUrl:'./test.component.html',
})
export class testComponent implements OnInit{
     backendData: any={}
    async fetchBackend (){
      try{
        const res = await fetch(`/api/spots`)
        if(res.ok){
            const data = await res.json()
            console.log(data)
            this.backendData = data
        }else{
           console.error('API request failed', res.status);
        }
      }catch(e){
        console.log('e',e)
      } 
    }
    ngOnInit(): void {
        this.fetchBackend()
    }
}