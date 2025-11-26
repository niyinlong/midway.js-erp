import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Content Quiz Question
 */
@Entity('slide_question')
export class SlideQuestion {
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
   * Content
   */
  @Column({
    type: 'int'
  })
  slide_id: number;

  // @ManyToOne(() => Slide)
  // @JoinColumn({ name: 'slide_id' })
  // slide: Slide;

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
   * Question Name
   */
  @Column({
    type: 'jsonb'
  })
  question: object;

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