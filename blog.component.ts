import { Component, NgModule, style } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { ValueUnwrapper } from '@angular/core/src/change_detection/change_detection';


@Component({
    selector: 'blog',
    template: '<div class="form-group" *ngFor= "let post of blogPosts"><textarea class="form" rows="7"></textarea><input class="btn btn-primary" type="submit" value="Submit"></div>'

})


class BlogComponent {
        
    blogPost: Object []; 

    constructor () {
      this.blogPost = [
        {  
            id:1,
            texto:"Teste1 teste teste",
            datahora:new Date ("2019-04-04T11:25:43.511Z"). toLocaleString()
         }, {  
            id:2,
            texto:"Teste 2 teste  teste ",
            datahora:new Date ("2019-04-04T12:25:43.511Z"). toLocaleString()
         }, 
         {  
            id:3,
            texto:"Teste 3 teste  teste ",
            datahora:new Date ("2019-04-04T12:25:43.511Z"). toLocaleString()
         }
      ]
    }
}
