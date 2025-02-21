import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {ProductType} from "../../../../types/productType";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: ProductType[] = [];
  loading: boolean = false;
  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(()=> {
          this.loading = false;

        })
      )
      .subscribe({
        next: (data)=> {
          this.products = data;
          console.log('next')
        },
        error:(error) =>{
          console.log(error);
          this.router.navigate(['/'])
        }
      }

    )
  }

}
