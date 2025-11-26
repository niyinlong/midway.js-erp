import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Slide Question''s Answer
 */
@Entity('slide_answer')
export class SlideAnswer {
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
   * Question
   */
  @Column({
    type: 'int'
  })
  question_id: number;

  // @ManyToOne(() => Question)
  // @JoinColumn({ name: 'question_id' })
  // question: Question;

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
   * Answer
   */
  @Column({
    type: 'jsonb'
  })
  text_value: object;

  /**
   * Comment
   */
  @Column({
    type: 'jsonb'
  })
  comment: object;

  /**
   * Is correct answer
   */
  @Column({
    type: 'boolean'
  })
  is_correct: boolean;

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