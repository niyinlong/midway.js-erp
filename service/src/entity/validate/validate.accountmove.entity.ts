import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Validate Account Move
 */
@Entity('validate_account_move')
export class ValidateAccountMove {
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
   * Force
   */
  @Column({
    type: 'boolean'
  })
  force_post: boolean;

  /**
   * Force Hash
   */
  @Column({
    type: 'boolean'
  })
  force_hash: boolean;

  /**
   * Ignore Abnormal Date
   */
  @Column({
    type: 'boolean'
  })
  ignore_abnormal_date: boolean;

  /**
   * Ignore Abnormal Amount
   */
  @Column({
    type: 'boolean'
  })
  ignore_abnormal_amount: boolean;

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