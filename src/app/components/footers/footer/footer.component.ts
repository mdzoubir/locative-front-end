import { Component, OnInit } from "@angular/core";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent implements OnInit {

  date = new Date().getFullYear();

  currentLang: string;
  constructor(private translate : TranslateService) {
    if(localStorage.getItem('currentLang') != null){
      this.translate.use(this.currentLang);
    }else{
      this.translate.use("fr");

    }
  }

  ngOnInit(): void {}


  changeCurrentLang(lang: string){
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    window.scroll(0,0);
  }
}
