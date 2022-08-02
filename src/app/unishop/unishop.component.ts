import { Component, OnInit } from '@angular/core';
import { IProduct } from '@models/product_shop';
import data from '@assets/json/shop_data.json';

@Component({
  selector: 'app-unishop',
  templateUrl: './unishop.component.html',
  styleUrls: ['./unishop.component.scss']
})
export class UnishopComponent implements OnInit {
  products: IProduct[] = data;
  cart: IProduct[] = [];
  isCartOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(id: number){
    this.cart.push(this.products[id]);
    console.log(this.cart)
  }

}
