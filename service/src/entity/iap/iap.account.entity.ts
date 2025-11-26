import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * IAP Account
 */
@Entity('iap_account')
export class IapAccount {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Service
   */
  @Column({
    type: 'int'
  })
  service_id: number;

  // @ManyToOne(() => Service)
  // @JoinColumn({ name: 'service_id' })
  // service: Service;

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
   * Account Token
   */
  @Column({
    type: 'varchar'
  })
  account_token: string;

  /**
   * Balance
   */
  @Column({
    type: 'varchar'
  })
  balance: string;

  /**
   * State
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Service Locked
   */
  @Column({
    type: 'boolean'
  })
  service_locked: boolean;

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
   * Email Alert Threshold
   */
  @Column({
    type: 'varchar'
  })
  warning_threshold: string;

  /**
   * Sender Name
   */
  @Column({
    type: 'varchar'
  })
  sender_name: string;

}