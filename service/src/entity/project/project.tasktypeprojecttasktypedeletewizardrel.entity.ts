import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_task_type_delete_wizard AND project_task_type
 */
@Entity('project_task_type_project_task_type_delete_wizard_rel')
export class ProjectTaskTypeProjectTaskTypeDeleteWizardRel {
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
  project_task_type_id: number;

  // @ManyToOne(() => ProjectTaskType)
  // @JoinColumn({ name: 'project_task_type_id' })
  // project_task_type: ProjectTaskType;

}