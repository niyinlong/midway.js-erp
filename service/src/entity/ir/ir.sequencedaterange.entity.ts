import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Sequence Date Range
 */
@Entity('ir_sequence_date_range')
export class IrSequenceDateRange {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Main Sequence
   */
  @Column({
    type: 'int'
  })
  sequence_id: number;

  // @ManyToOne(() => Sequence)
  // @JoinColumn({ name: 'sequence_id' })
  // sequence: Sequence;

  /**
   * Next Number
   */
  @Column({
    type: 'int'
  })
  number_next: number;

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
   * From
   */
  @Column({
    type: 'datetime'
  })
  date_from: Date;

  /**
   * To
   */
  @Column({
    type: 'datetime'
  })
  date_to: Date;

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