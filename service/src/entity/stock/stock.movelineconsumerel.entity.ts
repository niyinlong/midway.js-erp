import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_move_line AND stock_move_line
 */
@Entity('stock_move_line_consume_rel')
export class StockMoveLineConsumeRel {
  @Column({
    type: 'int'
  })
  consume_line_id: number;

  // @ManyToOne(() => ConsumeLine)
  // @JoinColumn({ name: 'consume_line_id' })
  // consume_line: ConsumeLine;

  @Column({
    type: 'int'
  })
  produce_line_id: number;

  // @ManyToOne(() => ProduceLine)
  // @JoinColumn({ name: 'produce_line_id' })
  // produce_line: ProduceLine;

}