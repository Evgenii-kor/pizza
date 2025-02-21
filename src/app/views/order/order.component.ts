import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CartService} from "../../shared/services/cart.service";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  private subscriptionOrder: Subscription | null = null;

  public formValues = {
    productTitle: '',
    address:'',
    phone:''
  }
  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    // if(this.cartService.product){
    //   this.formValues.productTitle = this.cartService.product;
    // }


    //Метод observable
    this.activatedRoute.queryParams.subscribe((params) => {
      if(params['product']){
        this.formValues.productTitle = params['product'];
      }
    })
  }

  ngOnDestroy(){
    this.subscriptionOrder?.unsubscribe();
  }



  public createOrder(){
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес доставки');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    this.subscriptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone
    })
      .subscribe(response => {
        if(response.success && !response.message){
          alert('Спасибо за заказ');
          this.formValues = {
            productTitle: '',
            address:'',
            phone:''
          }
        }else{
          alert('Ошибка')
        }
      })
  }

}
