import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Mail Server
 */
@Entity('ir_mail_server')
export class IrMailServer {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * SMTP Port
   */
  @Column({
    type: 'int'
  })
  smtp_port: number;

  /**
   * Priority
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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * FROM Filtering
   */
  @Column({
    type: 'varchar'
  })
  from_filter: string;

  /**
   * SMTP Server
   */
  @Column({
    type: 'varchar'
  })
  smtp_host: string;

  /**
   * Authenticate with
   */
  @Column({
    type: 'varchar'
  })
  smtp_authentication: string;

  /**
   * Username
   */
  @Column({
    type: 'varchar'
  })
  smtp_user: string;

  /**
   * Password
   */
  @Column({
    type: 'varchar'
  })
  smtp_pass: string;

  /**
   * Connection Encryption
   */
  @Column({
    type: 'varchar'
  })
  smtp_encryption: string;

  /**
   * Debugging
   */
  @Column({
    type: 'boolean'
  })
  smtp_debug: boolean;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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
   * Max Email Size
   */
  @Column({
    type: 'varchar'
  })
  max_email_size: string;

  /**
   * SSL Certificate
   */
  @Column({
    type: 'bytea'
  })
  smtp_ssl_certificate: Buffer;

  /**
   * SSL Private Key
   */
  @Column({
    type: 'bytea'
  })
  smtp_ssl_private_key: Buffer;

  /**
   * Owner
   */
  @Column({
    type: 'int'
  })
  owner_user_id: number;

  // @ManyToOne(() => OwnerUser)
  // @JoinColumn({ name: 'owner_user_id' })
  // owner_user: OwnerUser;

  /**
   * Owner Limit Count
   */
  @Column({
    type: 'int'
  })
  owner_limit_count: number;

  /**
   * Owner Limit Time
   */
  @Column({
    type: 'datetime'
  })
  owner_limit_time: Date;

  /**
   * Access Token Expiration Timestamp
   */
  @Column({
    type: 'int'
  })
  google_gmail_access_token_expiration: number;

  /**
   * Refresh Token
   */
  @Column({
    type: 'varchar'
  })
  google_gmail_refresh_token: string;

  /**
   * Access Token
   */
  @Column({
    type: 'varchar'
  })
  google_gmail_access_token: string;

  /**
   * Outlook Access Token Expiration Timestamp
   */
  @Column({
    type: 'int'
  })
  microsoft_outlook_access_token_expiration: number;

  /**
   * Outlook Refresh Token
   */
  @Column({
    type: 'varchar'
  })
  microsoft_outlook_refresh_token: string;

  /**
   * Outlook Access Token
   */
  @Column({
    type: 'varchar'
  })
  microsoft_outlook_access_token: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}