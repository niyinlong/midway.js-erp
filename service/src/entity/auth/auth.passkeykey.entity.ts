import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Passkey
 */
@Entity('auth_passkey_key')
export class AuthPasskeyKey {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sign Count
   */
  @Column({
    type: 'int'
  })
  sign_count: number;

  /**
   * Create Uid
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
   * Credential Identifier
   */
  @Column({
    type: 'varchar'
  })
  credential_identifier: string;

  // @ManyToOne(() => Credentialentifier)
  // @JoinColumn({ name: 'credential_identifier' })
  // credentialentifier: Credentialentifier;

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
  public_key: string;

}