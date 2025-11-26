import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_act_report_xml AND res_groups
 */
@Entity('res_groups_report_rel')
export class ResGroupsReportRel {
  @Column({
    type: 'int'
  })
  uid: number;

  @Column({
    type: 'int'
  })
  gid: number;

}