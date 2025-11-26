import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Rating
 */
@Entity('rating_rating')
export class RatingRating {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Related Document Model
   */
  @Column({
    type: 'int'
  })
  res_model_id: number;

  // @ManyToOne(() => ResModel)
  // @JoinColumn({ name: 'res_model_id' })
  // res_model: ResModel;

  /**
   * Document
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Parent Related Document Model
   */
  @Column({
    type: 'int'
  })
  parent_res_model_id: number;

  // @ManyToOne(() => ParentResModel)
  // @JoinColumn({ name: 'parent_res_model_id' })
  // parent_res_model: ParentResModel;

  /**
   * Parent Document
   */
  @Column({
    type: 'int'
  })
  parent_res_id: number;

  // @ManyToOne(() => ParentRes)
  // @JoinColumn({ name: 'parent_res_id' })
  // parent_res: ParentRes;

  /**
   * Rated Operator
   */
  @Column({
    type: 'int'
  })
  rated_partner_id: number;

  // @ManyToOne(() => RatedPartner)
  // @JoinColumn({ name: 'rated_partner_id' })
  // rated_partner: RatedPartner;

  /**
   * Customer
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Message
   */
  @Column({
    type: 'int'
  })
  message_id: number;

  // @ManyToOne(() => Message)
  // @JoinColumn({ name: 'message_id' })
  // message: Message;

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
   * Resource name
   */
  @Column({
    type: 'varchar'
  })
  res_name: string;

  /**
   * Document Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Parent Document Name
   */
  @Column({
    type: 'varchar'
  })
  parent_res_name: string;

  /**
   * Parent Document Model
   */
  @Column({
    type: 'varchar'
  })
  parent_res_model: string;

  /**
   * Rating
   */
  @Column({
    type: 'varchar'
  })
  rating_text: string;

  /**
   * Security Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Comment
   */
  @Column({
    type: 'varchar'
  })
  feedback: string;

  /**
   * Visible Internally Only
   */
  @Column({
    type: 'boolean'
  })
  is_internal: boolean;

  /**
   * Filled Rating
   */
  @Column({
    type: 'boolean'
  })
  consumed: boolean;

  /**
   * Submitted on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Rated On
   */
  @Column({
    type: 'datetime'
  })
  rated_on: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Rating Value
   */
  @Column({
    type: 'varchar'
  })
  rating: string;

  /**
   * Commented by
   */
  @Column({
    type: 'int'
  })
  publisher_id: number;

  // @ManyToOne(() => Publisher)
  // @JoinColumn({ name: 'publisher_id' })
  // publisher: Publisher;

  /**
   * Publisher comment
   */
  @Column({
    type: 'varchar'
  })
  publisher_comment: string;

  /**
   * Commented on
   */
  @Column({
    type: 'datetime'
  })
  publisher_datetime: Date;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}