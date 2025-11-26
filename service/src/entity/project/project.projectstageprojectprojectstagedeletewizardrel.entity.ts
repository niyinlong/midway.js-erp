import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_project_stage_delete_wizard AND project_project_stage
 */
@Entity('project_project_stage_project_project_stage_delete_wizard_rel')
export class ProjectProjectStageProjectProjectStageDeleteWizardRel {
  @Column({
    type: 'int'
  })
  project_project_stage_delete_wizard_id: number;

  // @ManyToOne(() => ProjectProjectStageDeleteWizard)
  // @JoinColumn({ name: 'project_project_stage_delete_wizard_id' })
  // project_project_stage_delete_wizard: ProjectProjectStageDeleteWizard;

  @Column({
    type: 'int'
  })
  project_project_stage_id: number;

  // @ManyToOne(() => ProjectProjectStage)
  // @JoinColumn({ name: 'project_project_stage_id' })
  // project_project_stage: ProjectProjectStage;

}