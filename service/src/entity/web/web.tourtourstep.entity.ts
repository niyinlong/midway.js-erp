import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Tour''s step
 */
@Entity('web_tour_tour_step')
export class WebTourTourStep {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Tour
   */
  @Column({
    type: 'int'
  })
  tour_id: number;

  // @ManyToOne(() => Tour)
  // @JoinColumn({ name: 'tour_id' })
  // tour: Tour;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Trigger
   */
  @Column({
    type: 'varchar'
  })
  trigger: string;

  /**
   * Content
   */
  @Column({
    type: 'varchar'
  })
  content: string;

  /**
   * Tooltip Position
   */
  @Column({
    type: 'varchar'
  })
  tooltip_position: string;

  /**
   * Run
   */
  @Column({
    type: 'varchar'
  })
  run: string;

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