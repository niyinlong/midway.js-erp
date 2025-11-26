import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Wizard to Split a Production
 */
@Entity('mrp_production_split')
export class MrpProductionSplit {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Split Productions
   */
  @Column({
    type: 'int'
  })
  production_split_multi_id: number;

  // @ManyToOne(() => ProductionSplitMulti)
  // @JoinColumn({ name: 'production_split_multi_id' })
  // production_split_multi: ProductionSplitMulti;

  /**
   * Manufacturing Order
   */
  @Column({
    type: 'int'
  })
  production_id: number;

  // @ManyToOne(() => Production)
  // @JoinColumn({ name: 'production_id' })
  // production: Production;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

}