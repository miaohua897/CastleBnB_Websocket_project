import {CommonModule} from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'

@Component({
    selector:"spot",
    standalone:true,
    imports:[CommonModule, NgOptimizedImage],
    templateUrl:"./spot.component.html",
     styleUrl: './spot.component.css'
})
export class spotComponent implements OnInit{
    spotData: any=[]

    async fetchSpotData(){
        const res = await fetch(`/api/spots`)
        if(res.ok){
            const data = await res.json()
            this.spotData = data.Spots
        }else{
            console.error('API request failed', res.status)
        }
    }

    ngOnInit(): void {
        this.fetchSpotData()
    }
}