import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Mail Gateway Allowed
 */
@Entity('mail_gateway_allowed')
export class MailGatewayAllowed {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Email Address
   */
  @Column({
    type: 'varchar'
  })
  email: string;

  /**
   * Normalized Email
   */
  @Column({
    type: 'varchar'
  })
  email_normalized: string;

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