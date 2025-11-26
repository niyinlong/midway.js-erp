import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Project Sharing Collaborator Wizard
 */
@Entity('project_share_collaborator_wizard')
export class ProjectShareCollaboratorWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Parent Wizard
   */
  @Column({
    type: 'int'
  })
  parent_wizard_id: number;

  // @ManyToOne(() => ParentWizard)
  // @JoinColumn({ name: 'parent_wizard_id' })
  // parent_wizard: ParentWizard;

  /**
   * Collaborator
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
   * Access Mode
   */
  @Column({
    type: 'varchar'
  })
  access_mode: string;

  /**
   * Send Invitation
   */
  @Column({
    type: 'boolean'
  })
  send_invitation: boolean;

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