import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Additional resource for a particular slide
 */
@Entity('slide_slide_resource')
export class SlideSlideResource {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Slide
   */
  @Column({
    type: 'int'
  })
  slide_id: number;

  // @ManyToOne(() => Slide)
  // @JoinColumn({ name: 'slide_id' })
  // slide: Slide;

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
   * Resource Type
   */
  @Column({
    type: 'varchar'
  })
  resource_type: string;

  /**
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * File Name
   */
  @Column({
    type: 'varchar'
  })
  file_name: string;

  /**
   * Link
   */
  @Column({
    type: 'varchar'
  })
  link: string;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}