import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,AfterViewInit {
  ngAfterViewInit() {
    this.popupComponent.open();

    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = 'About component';
    // this.modalService.open(this.popup, {})

  }
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;


}
