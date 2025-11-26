import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_task AND project_task
 */
@Entity('task_dependencies_rel')
export class TaskDependenciesRel {
  @Column({
    type: 'int'
  })
  task_id: number;

  // @ManyToOne(() => Task)
  // @JoinColumn({ name: 'task_id' })
  // task: Task;

  @Column({
    type: 'int'
  })
  depends_on_id: number;

  // @ManyToOne(() => DependsOn)
  // @JoinColumn({ name: 'depends_on_id' })
  // depends_on: DependsOn;

}