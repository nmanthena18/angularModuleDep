import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public html: any;
  constructor(private http: HttpClient, private sanitizer:DomSanitizer){
    // let string = `<script>console.log(12132132)</script><h1>hello</h1>`
    this.http.get('https://samplewebapp01.azurewebsites.net/Home/Privacy',{responseType:'text'}).subscribe(res=>{
      this.html = this.sanitizer.bypassSecurityTrustHtml(res)
      this.sanitizer.bypassSecurityTrustScript(`<script>alert()</script>`)
    })

  }
  title = 'cw5';


}
