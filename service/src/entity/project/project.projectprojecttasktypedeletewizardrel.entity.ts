import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_task_type_delete_wizard AND project_project
 */
@Entity('project_project_project_task_type_delete_wizard_rel')
export class ProjectProjectProjectTaskTypeDeleteWizardRel {
  @Column({
    type: 'int'
  })
  project_task_type_delete_wizard_id: number;

  // @ManyToOne(() => ProjectTaskTypeDeleteWizard)
  // @JoinColumn({ name: 'project_task_type_delete_wizard_id' })
  // project_task_type_delete_wizard: ProjectTaskTypeDeleteWizard;

  @Column({
    type: 'int'
  })
  project_project_id: number;

  // @ManyToOne(() => ProjectProject)
  // @JoinColumn({ name: 'project_project_id' })
  // project_project: ProjectProject;

}