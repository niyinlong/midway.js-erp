import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_stage AND crm_team
 */
@Entity('crm_stage_crm_team_rel')
export class CrmStageCrmTeamRel {
  @Column({
    type: 'int'
  })
  crm_stage_id: number;

  // @ManyToOne(() => CrmStage)
  // @JoinColumn({ name: 'crm_stage_id' })
  // crm_stage: CrmStage;

  @Column({
    type: 'int'
  })
  crm_team_id: number;

  // @ManyToOne(() => CrmTeam)
  // @JoinColumn({ name: 'crm_team_id' })
  // crm_team: CrmTeam;

}