import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Contract Template Wizard
 */
@Entity('hr_version_wizard')
export class HrVersionWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Contract Template
   */
  @Column({
    type: 'int'
  })
  contract_template_id: number;

  // @ManyToOne(() => ContractTemplate)
  // @JoinColumn({ name: 'contract_template_id' })
  // contract_template: ContractTemplate;

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