import { Component, Output,EventEmitter } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    title = "Salt Bae Cooking Lifestyle";    
    @Output()display= new EventEmitter<string>();
    
    onSelect(val:string){
        this.display.emit(val);
    }
}