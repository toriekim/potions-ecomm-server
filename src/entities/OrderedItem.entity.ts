import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Order } from './Order.entity'
import { Product } from './Product.entity'

@Entity({ name: 'orderedItems' })
export class OrderedItem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'integer' })
  itemQty: number

  @Column({ type: 'integer' })
  itemPrice: number

  // --- Relations ---
  // Many-to-Many relationship between Product and Order through OrderedItem
  @ManyToOne(() => Product, (product) => product.orderedItems)
  @JoinColumn({ name: 'productId' })
  product: Product

  @ManyToOne(() => Order, (order) => order.orderedItems)
  @JoinColumn({ name: 'orderId' })
  order: Order
}
