import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../product-data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  products = PRODUCTS;
}
