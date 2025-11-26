import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Employee
 */
@Entity('hr_employee')
export class HrEmployee {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Resource
   */
  @Column({
    type: 'int'
  })
  resource_id: number;

  // @ManyToOne(() => Resource)
  // @JoinColumn({ name: 'resource_id' })
  // resource: Resource;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Main Attachment
   */
  @Column({
    type: 'int'
  })
  message_main_attachment_id: number;

  // @ManyToOne(() => MessageMainAttachment)
  // @JoinColumn({ name: 'message_main_attachment_id' })
  // message_main_attachment: MessageMainAttachment;

  /**
   * Current Version
   */
  @Column({
    type: 'int'
  })
  current_version_id: number;

  // @ManyToOne(() => CurrentVersion)
  // @JoinColumn({ name: 'current_version_id' })
  // current_version: CurrentVersion;

  /**
   * User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Work Contact
   */
  @Column({
    type: 'int'
  })
  work_contact_id: number;

  // @ManyToOne(() => WorkContact)
  // @JoinColumn({ name: 'work_contact_id' })
  // work_contact: WorkContact;

  /**
   * Country of Birth
   */
  @Column({
    type: 'int'
  })
  country_of_birth: number;

  /**
   * Manager
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  /**
   * Coach
   */
  @Column({
    type: 'int'
  })
  coach_id: number;

  // @ManyToOne(() => Coach)
  // @JoinColumn({ name: 'coach_id' })
  // coach: Coach;

  /**
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

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
   * Employee Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Work Phone
   */
  @Column({
    type: 'varchar'
  })
  work_phone: string;

  /**
   * Work Mobile
   */
  @Column({
    type: 'varchar'
  })
  mobile_phone: string;

  /**
   * Work Email
   */
  @Column({
    type: 'varchar'
  })
  work_email: string;

  /**
   * Legal Name
   */
  @Column({
    type: 'varchar'
  })
  legal_name: string;

  /**
   * Private Phone
   */
  @Column({
    type: 'varchar'
  })
  private_phone: string;

  /**
   * Private Email
   */
  @Column({
    type: 'varchar'
  })
  private_email: string;

  /**
   * Lang
   */
  @Column({
    type: 'varchar'
  })
  lang: string;

  /**
   * Place of Birth
   */
  @Column({
    type: 'varchar'
  })
  place_of_birth: string;

  /**
   * Work Permit No
   */
  @Column({
    type: 'varchar'
  })
  permit_no: string;

  /**
   * Visa No
   */
  @Column({
    type: 'varchar'
  })
  visa_no: string;

  /**
   * Certificate Level
   */
  @Column({
    type: 'varchar'
  })
  certificate: string;

  /**
   * Field of Study
   */
  @Column({
    type: 'varchar'
  })
  study_field: string;

  /**
   * School
   */
  @Column({
    type: 'varchar'
  })
  study_school: string;

  /**
   * Emergency Contact
   */
  @Column({
    type: 'varchar'
  })
  emergency_contact: string;

  /**
   * Emergency Phone
   */
  @Column({
    type: 'varchar'
  })
  emergency_phone: string;

  /**
   * Badge ID
   */
  @Column({
    type: 'varchar'
  })
  barcode: string;

  /**
   * PIN
   */
  @Column({
    type: 'varchar'
  })
  pin: string;

  /**
   * Private Car Plate
   */
  @Column({
    type: 'varchar'
  })
  private_car_plate: string;

  /**
   * Birthday
   */
  @Column({
    type: 'datetime'
  })
  birthday: Date;

  /**
   * Visa Expiration Date
   */
  @Column({
    type: 'datetime'
  })
  visa_expire: Date;

  /**
   * Work Permit Expiration Date
   */
  @Column({
    type: 'datetime'
  })
  work_permit_expiration_date: Date;

  /**
   * Salary Distribution
   */
  @Column({
    type: 'jsonb'
  })
  salary_distribution: object;

  /**
   * Properties
   */
  @Column({
    type: 'jsonb'
  })
  employee_properties: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Show to all employees
   */
  @Column({
    type: 'boolean'
  })
  birthday_public_display: boolean;

  /**
   * Work Permit Scheduled Activity
   */
  @Column({
    type: 'boolean'
  })
  work_permit_scheduled_activity: boolean;

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
   * Monday
   */
  @Column({
    type: 'int'
  })
  monday_location_id: number;

  // @ManyToOne(() => MondayLocation)
  // @JoinColumn({ name: 'monday_location_id' })
  // monday_location: MondayLocation;

  /**
   * Tuesday
   */
  @Column({
    type: 'int'
  })
  tuesday_location_id: number;

  // @ManyToOne(() => TuesdayLocation)
  // @JoinColumn({ name: 'tuesday_location_id' })
  // tuesday_location: TuesdayLocation;

  /**
   * Wednesday
   */
  @Column({
    type: 'int'
  })
  wednesday_location_id: number;

  // @ManyToOne(() => WednesdayLocation)
  // @JoinColumn({ name: 'wednesday_location_id' })
  // wednesday_location: WednesdayLocation;

  /**
   * Thursday
   */
  @Column({
    type: 'int'
  })
  thursday_location_id: number;

  // @ManyToOne(() => ThursdayLocation)
  // @JoinColumn({ name: 'thursday_location_id' })
  // thursday_location: ThursdayLocation;

  /**
   * Friday
   */
  @Column({
    type: 'int'
  })
  friday_location_id: number;

  // @ManyToOne(() => FridayLocation)
  // @JoinColumn({ name: 'friday_location_id' })
  // friday_location: FridayLocation;

  /**
   * Saturday
   */
  @Column({
    type: 'int'
  })
  saturday_location_id: number;

  // @ManyToOne(() => SaturdayLocation)
  // @JoinColumn({ name: 'saturday_location_id' })
  // saturday_location: SaturdayLocation;

  /**
   * Sunday
   */
  @Column({
    type: 'int'
  })
  sunday_location_id: number;

  // @ManyToOne(() => SundayLocation)
  // @JoinColumn({ name: 'sunday_location_id' })
  // sunday_location: SundayLocation;

  /**
   * Today Location Name
   */
  @Column({
    type: 'varchar'
  })
  today_location_name: string;

}