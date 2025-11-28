import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CRM阶段与团队关联表实体
 * 作用：存储CRM阶段与销售团队之间的多对多关联关系，定义哪些团队可以使用特定的销售阶段
 */
@Entity('crm_stage_crm_team_rel')
export class CrmStageCrmTeamRel {
  /**
   * CRM阶段ID
   * 作用：关联到具体的CRM阶段
   */
  @Column({
    type: 'int',
  })
  crm_stage_id: number;

  // 多对一关联到CrmStage实体
  // @ManyToOne(() => CrmStage)
  // @JoinColumn({ name: 'crm_stage_id' })
  // crm_stage: CrmStage;

  /**
   * CRM团队ID
   * 作用：关联到具体的销售团队
   */
  @Column({
    type: 'int',
  })
  crm_team_id: number;

  // 多对一关联到CrmTeam实体
  // @ManyToOne(() => CrmTeam)
  // @JoinColumn({ name: 'crm_team_id' })
  // crm_team: CrmTeam;

}