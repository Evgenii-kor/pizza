import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ProductType} from "../../../../types/productType";



@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent{

  @Input() product: ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor() {
    this.product = {
      id:0,
      image: '',
      title: '',
      description: ''
    }
  }
  // addProductToCart(){
  //     this.addToCartEvent.emit(this.product.title);
  // }

}
