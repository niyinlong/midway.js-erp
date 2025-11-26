import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_move AND account_analytic_line
 */
@Entity('account_analytic_line_stock_move_rel')
export class AccountAnalyticLineStockMoveRel {
  @Column({
    type: 'int'
  })
  stock_move_id: number;

  // @ManyToOne(() => StockMove)
  // @JoinColumn({ name: 'stock_move_id' })
  // stock_move: StockMove;

  @Column({
    type: 'int'
  })
  account_analytic_line_id: number;

  // @ManyToOne(() => AccountAnalyticLine)
  // @JoinColumn({ name: 'account_analytic_line_id' })
  // account_analytic_line: AccountAnalyticLine;

}