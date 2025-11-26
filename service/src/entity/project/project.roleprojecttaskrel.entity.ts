import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_task AND project_role
 */
@Entity('project_role_project_task_rel')
export class ProjectRoleProjectTaskRel {
  @Column({
    type: 'int'
  })
  project_task_id: number;

  // @ManyToOne(() => ProjectTask)
  // @JoinColumn({ name: 'project_task_id' })
  // project_task: ProjectTask;

  @Column({
    type: 'int'
  })
  project_role_id: number;

  // @ManyToOne(() => ProjectRole)
  // @JoinColumn({ name: 'project_role_id' })
  // project_role: ProjectRole;

}