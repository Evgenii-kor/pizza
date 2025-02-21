import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {CartService} from "../../../shared/services/cart.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  private observable: Observable<string>;
  constructor(public cartService: CartService, private modalService: NgbModal) {
   this.observable = new Observable((observer)=> {
      setTimeout(()=> {
        observer.next('hello')
      }, 2000)
    })
  }


  ngOnInit(): void {
    this.observable.subscribe((param: string)=> {
      console.log(param)
    })
  }
  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;
  ngAfterViewInit() {
    this.popupComponent.open();

    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = 'Main component';
    // this.modalService.open(this.popup, {})

  }

  // test(popup:TemplateRef<ElementRef>){
  //
  // }
}
