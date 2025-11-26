import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN discuss_channel AND hr_department
 */
@Entity('discuss_channel_hr_department_rel')
export class DiscussChannelHrDepartmentRel {
  @Column({
    type: 'int'
  })
  discuss_channel_id: number;

  // @ManyToOne(() => DiscussChannel)
  // @JoinColumn({ name: 'discuss_channel_id' })
  // discuss_channel: DiscussChannel;

  @Column({
    type: 'int'
  })
  hr_department_id: number;

  // @ManyToOne(() => HrDepartment)
  // @JoinColumn({ name: 'hr_department_id' })
  // hr_department: HrDepartment;

}