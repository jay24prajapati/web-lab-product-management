import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products = [
    {
      id: 1,
      name: "Professional Gaming Headset",
      description:
        "Premium wireless gaming headset featuring advanced noise isolation and crystal-clear audio quality for immersive gaming experiences.",
      imageUrl: "https://images.unsplash.com/photo-1599669454699-248893623440",
      price: 149.99,
      quantity: 32,
    },
    {
      id: 2,
      name: "Adjustable Standing Desk",
      description:
        "Height-adjustable standing desk with memory presets and cable management system designed for modern workspace productivity.",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      price: 299.99,
      quantity: 12,
    },
    {
      id: 3,
      name: "Athletic Training Sneakers",
      description:
        "High-performance training shoes with responsive cushioning and breathable construction for intensive workout sessions.",
      imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      price: 179.99,
      quantity: 0,
    },
  ];

  getProducts() {
    return this.products;
  }
}