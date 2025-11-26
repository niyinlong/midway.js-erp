import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Portal User Config
 */
@Entity('portal_wizard_user')
export class PortalWizardUser {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Wizard
   */
  @Column({
    type: 'int'
  })
  wizard_id: number;

  // @ManyToOne(() => Wizard)
  // @JoinColumn({ name: 'wizard_id' })
  // wizard: Wizard;

  /**
   * Contact
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

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
   * Email
   */
  @Column({
    type: 'varchar'
  })
  email: string;

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