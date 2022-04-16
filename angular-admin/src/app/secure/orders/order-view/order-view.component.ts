import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {orderService} from '../../../services/order.service';
import {Response} from '../../../interfaces/response';
import {OrderItem} from '../../../interfaces/order-item';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  orderItems: OrderItem[] = []

  constructor(
    private orderService: orderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe{
      params => {
        this.orderService.get(params.id).subscribe(
          (res: Response) => {
            this.orderItems = res.data;
          }
        )
      }
    }
  }

}
