import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Tours
 */
@Entity('web_tour_tour')
export class WebTourTour {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Starting URL
   */
  @Column({
    type: 'varchar'
  })
  url: string;

  /**
   * Rainbow Man Message
   */
  @Column({
    type: 'jsonb'
  })
  rainbow_man_message: object;

  /**
   * Custom
   */
  @Column({
    type: 'boolean'
  })
  custom: boolean;

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