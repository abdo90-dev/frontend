import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private toggleButton: any;
  private sidebarVisible: boolean;
  isSlideOpen: boolean = false;
  @ViewChild('closeBtn')
    closeBtn!: ElementRef;
  
  closeSlide() {
    this.closeBtn.nativeElement.click();
  }
  constructor(public location: Location, private element : ElementRef) {
      this.sidebarVisible = false;
  }

  ngOnInit() {
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
 

  sidebarOpen() {
      const toggleButton = this.toggleButton;
      const html = document.getElementsByTagName('html')[0];
      setTimeout(function(){
          toggleButton.classList.add('toggled');
      }, 500);
      html.classList.add('nav-open');

      this.sidebarVisible = true;
  };
  sidebarClose() {
      const html = document.getElementsByTagName('html')[0];
      // console.log(html);
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      html.classList.remove('nav-open');
  };
  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  };

  isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '/documentation' ) {
          return true;
      }
      else {
          return false;
      }
  }
}
