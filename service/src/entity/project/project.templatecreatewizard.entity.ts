import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Project Template create Wizard
 */
@Entity('project_template_create_wizard')
export class ProjectTemplateCreateWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Alias Domain
   */
  @Column({
    type: 'int'
  })
  alias_domain_id: number;

  // @ManyToOne(() => AliasDomain)
  // @JoinColumn({ name: 'alias_domain_id' })
  // alias_domain: AliasDomain;

  /**
   * Template
   */
  @Column({
    type: 'int'
  })
  template_id: number;

  // @ManyToOne(() => Template)
  // @JoinColumn({ name: 'template_id' })
  // template: Template;

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
   * Alias Name
   */
  @Column({
    type: 'varchar'
  })
  alias_name: string;

  /**
   * Start Date
   */
  @Column({
    type: 'datetime'
  })
  date_start: Date;

  /**
   * Expiration Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

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
   * Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

}