import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_report AND account_report
 */
@Entity('account_report_section_rel')
export class AccountReportSectionRel {
  @Column({
    type: 'int'
  })
  main_report_id: number;

  // @ManyToOne(() => MainReport)
  // @JoinColumn({ name: 'main_report_id' })
  // main_report: MainReport;

  @Column({
    type: 'int'
  })
  sub_report_id: number;

  // @ManyToOne(() => SubReport)
  // @JoinColumn({ name: 'sub_report_id' })
  // sub_report: SubReport;

}