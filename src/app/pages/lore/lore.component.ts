import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-lore',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  templateUrl: './lore.component.html',
  styleUrl: './lore.component.scss'
})
export class LoreComponent {
  nextArrow : string = "fa-solid fa-arrow-right";
  previousArrow : string = "fa-solid fa-arrow-left";

  currentLocation : number = 1;

  getCurrentPage() {
    const page : any = document.querySelectorAll('.paper');
    const currentPage = [];

    for (let i = 0; i < page.length; i++) {
      const allPages = page[i];
      currentPage.push(allPages);
    }
    return currentPage;
  }

  getAllPages() : number {
    const page : any = document.querySelectorAll('.paper');
    return page.length;
  }

  getMaxLocation() : number {
    return this.getAllPages() + 1;
  }

  openBook(){
    const book : any = document.querySelector('.book');
    book.style.transform = 'translateX(50%)';
  }

  closeBook(){
    const book : any = document.querySelector('.book');
    book.style.transform = 'translateX(0%)';
  }

  goToNextPage(){
    let currentPage = this.getCurrentPage();

    if (this.currentLocation < this.getMaxLocation()){
      switch (this.currentLocation){
        case 1:
          this.openBook();
          currentPage[0].classList.add('flipped');
          currentPage[0].style.zIndex = "1";
          break;

        case 2:
          currentPage[1].classList.add('flipped');
          currentPage[1].style.zIndex = "2";
          break;

        default:
          throw Error(`Unknown location: ${this.currentLocation}`);
      }
      this.currentLocation++;
    }
  }

  goToPreviousPage(){
    let currentPage = this.getCurrentPage();

    if (this.currentLocation > 1){
      switch (this.currentLocation){
        case 3 :
          currentPage[1].classList.remove('flipped');
          currentPage[1].style.zIndex = "1";
          break;

        case 2 :
          this.closeBook();
          currentPage[0].classList.remove('flipped');
          currentPage[0].style.zIndex = "2";
          break;

        default:
          throw Error(`Unknown location: ${this.currentLocation}`);
      }
      this.currentLocation--;
    }
  }
}
