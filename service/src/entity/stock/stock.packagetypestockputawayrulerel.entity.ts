import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_putaway_rule AND stock_package_type
 */
@Entity('stock_package_type_stock_putaway_rule_rel')
export class StockPackageTypeStockPutawayRuleRel {
  @Column({
    type: 'int'
  })
  stock_putaway_rule_id: number;

  // @ManyToOne(() => StockPutawayRule)
  // @JoinColumn({ name: 'stock_putaway_rule_id' })
  // stock_putaway_rule: StockPutawayRule;

  @Column({
    type: 'int'
  })
  stock_package_type_id: number;

  // @ManyToOne(() => StockPackageType)
  // @JoinColumn({ name: 'stock_package_type_id' })
  // stock_package_type: StockPackageType;

}