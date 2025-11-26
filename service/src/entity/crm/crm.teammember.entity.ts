import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Sales Team Member
 */
@Entity('crm_team_member')
export class CrmTeamMember {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sales Team
   */
  @Column({
    type: 'int'
  })
  crm_team_id: number;

  // @ManyToOne(() => CrmTeam)
  // @JoinColumn({ name: 'crm_team_id' })
  // crm_team: CrmTeam;

  /**
   * Salesperson
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Average Leads Capacity (on 30 days)
   */
  @Column({
    type: 'int'
  })
  assignment_max: number;

  /**
   * Assignment Domain
   */
  @Column({
    type: 'varchar'
  })
  assignment_domain: string;

  /**
   * Preference assignment Domain
   */
  @Column({
    type: 'varchar'
  })
  assignment_domain_preferred: string;

  /**
   * Pause assignment
   */
  @Column({
    type: 'boolean'
  })
  assignment_optout: boolean;

}