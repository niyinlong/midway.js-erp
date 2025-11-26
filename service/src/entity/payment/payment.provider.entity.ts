import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Payment Provider
 */
@Entity('payment_provider')
export class PaymentProvider {
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
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Redirect Form Template
   */
  @Column({
    type: 'int'
  })
  redirect_form_view_id: number;

  // @ManyToOne(() => RedirectFormView)
  // @JoinColumn({ name: 'redirect_form_view_id' })
  // redirect_form_view: RedirectFormView;

  /**
   * Inline Form Template
   */
  @Column({
    type: 'int'
  })
  inline_form_view_id: number;

  // @ManyToOne(() => InlineFormView)
  // @JoinColumn({ name: 'inline_form_view_id' })
  // inline_form_view: InlineFormView;

  /**
   * Token Inline Form Template
   */
  @Column({
    type: 'int'
  })
  token_inline_form_view_id: number;

  // @ManyToOne(() => TokenInlineFormView)
  // @JoinColumn({ name: 'token_inline_form_view_id' })
  // token_inline_form_view: TokenInlineFormView;

  /**
   * Express Checkout Form Template
   */
  @Column({
    type: 'int'
  })
  express_checkout_form_view_id: number;

  // @ManyToOne(() => ExpressCheckoutFormView)
  // @JoinColumn({ name: 'express_checkout_form_view_id' })
  // express_checkout_form_view: ExpressCheckoutFormView;

  /**
   * Color
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Corresponding Module
   */
  @Column({
    type: 'int'
  })
  module_id: number;

  // @ManyToOne(() => Module)
  // @JoinColumn({ name: 'module_id' })
  // module: Module;

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
   * Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * State
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Help Message
   */
  @Column({
    type: 'jsonb'
  })
  pre_msg: object;

  /**
   * Pending Message
   */
  @Column({
    type: 'jsonb'
  })
  pending_msg: object;

  /**
   * Authorize Message
   */
  @Column({
    type: 'jsonb'
  })
  auth_msg: object;

  /**
   * Done Message
   */
  @Column({
    type: 'jsonb'
  })
  done_msg: object;

  /**
   * Cancelled Message
   */
  @Column({
    type: 'jsonb'
  })
  cancel_msg: object;

  /**
   * Maximum Amount
   */
  @Column({
    type: 'int'
  })
  maximum_amount: number;

  /**
   * Published
   */
  @Column({
    type: 'boolean'
  })
  is_published: boolean;

  /**
   * Allow Saving Payment Methods
   */
  @Column({
    type: 'boolean'
  })
  allow_tokenization: boolean;

  /**
   * Capture Amount Manually
   */
  @Column({
    type: 'boolean'
  })
  capture_manually: boolean;

  /**
   * Allow Express Checkout
   */
  @Column({
    type: 'boolean'
  })
  allow_express_checkout: boolean;

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

  /**
   * Communication
   */
  @Column({
    type: 'varchar'
  })
  so_reference_type: string;

  /**
   * Website
   */
  @Column({
    type: 'int'
  })
  website_id: number;

  // @ManyToOne(() => Website)
  // @JoinColumn({ name: 'website_id' })
  // website: Website;

}