import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Document Followers
 */
@Entity('mail_followers')
export class MailFollowers {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Related Document ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Related Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Related Document Model Name
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

}