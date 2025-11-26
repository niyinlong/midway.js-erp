import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Embedded Slides View Counter
 */
@Entity('slide_embed')
export class SlideEmbed {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Presentation
   */
  @Column({
    type: 'int'
  })
  slide_id: number;

  // @ManyToOne(() => Slide)
  // @JoinColumn({ name: 'slide_id' })
  // slide: Slide;

  /**
   * # Views
   */
  @Column({
    type: 'int'
  })
  count_views: number;

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
   * Third Party Website URL
   */
  @Column({
    type: 'varchar'
  })
  url: string;

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