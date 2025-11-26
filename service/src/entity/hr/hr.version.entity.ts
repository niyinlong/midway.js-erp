import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Version
 */
@Entity('hr_version')
export class HrVersion {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Employee
   */
  @Column({
    type: 'int'
  })
  employee_id: number;

  // @ManyToOne(() => Employee)
  // @JoinColumn({ name: 'employee_id' })
  // employee: Employee;

  /**
   * Last Modified by
   */
  @Column({
    type: 'int'
  })
  last_modified_uid: number;

  /**
   * Nationality (Country)
   */
  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

  /**
   * Private State
   */
  @Column({
    type: 'int'
  })
  private_state_id: number;

  // @ManyToOne(() => PrivateState)
  // @JoinColumn({ name: 'private_state_id' })
  // private_state: PrivateState;

  /**
   * Private Country
   */
  @Column({
    type: 'int'
  })
  private_country_id: number;

  // @ManyToOne(() => PrivateCountry)
  // @JoinColumn({ name: 'private_country_id' })
  // private_country: PrivateCountry;

  /**
   * Home-Work Distance
   */
  @Column({
    type: 'int'
  })
  distance_home_work: number;

  /**
   * Home-Work Distance in Km
   */
  @Column({
    type: 'int'
  })
  km_home_work: number;

  /**
   * Dependent Children
   */
  @Column({
    type: 'int'
  })
  children: number;

  /**
   * Department
   */
  @Column({
    type: 'int'
  })
  department_id: number;

  // @ManyToOne(() => Department)
  // @JoinColumn({ name: 'department_id' })
  // department: Department;

  /**
   * Job
   */
  @Column({
    type: 'int'
  })
  job_id: number;

  // @ManyToOne(() => Job)
  // @JoinColumn({ name: 'job_id' })
  // job: Job;

  /**
   * Work Address
   */
  @Column({
    type: 'int'
  })
  address_id: number;

  // @ManyToOne(() => Address)
  // @JoinColumn({ name: 'address_id' })
  // address: Address;

  /**
   * Work Location
   */
  @Column({
    type: 'int'
  })
  work_location_id: number;

  // @ManyToOne(() => WorkLocation)
  // @JoinColumn({ name: 'work_location_id' })
  // work_location: WorkLocation;

  /**
   * Departure Reason
   */
  @Column({
    type: 'int'
  })
  departure_reason_id: number;

  // @ManyToOne(() => DepartureReason)
  // @JoinColumn({ name: 'departure_reason_id' })
  // departure_reason: DepartureReason;

  /**
   * Working Hours
   */
  @Column({
    type: 'int'
  })
  resource_calendar_id: number;

  // @ManyToOne(() => ResourceCalendar)
  // @JoinColumn({ name: 'resource_calendar_id' })
  // resource_calendar: ResourceCalendar;

  /**
   * Contract Template
   */
  @Column({
    type: 'int'
  })
  contract_template_id: number;

  // @ManyToOne(() => ContractTemplate)
  // @JoinColumn({ name: 'contract_template_id' })
  // contract_template: ContractTemplate;

  /**
   * Salary Structure Type
   */
  @Column({
    type: 'int'
  })
  structure_type_id: number;

  // @ManyToOne(() => StructureType)
  // @JoinColumn({ name: 'structure_type_id' })
  // structure_type: StructureType;

  /**
   * Contract Type
   */
  @Column({
    type: 'int'
  })
  contract_type_id: number;

  // @ManyToOne(() => ContractType)
  // @JoinColumn({ name: 'contract_type_id' })
  // contract_type: ContractType;

  /**
   * HR Responsible
   */
  @Column({
    type: 'int'
  })
  hr_responsible_id: number;

  // @ManyToOne(() => HrResponsible)
  // @JoinColumn({ name: 'hr_responsible_id' })
  // hr_responsible: HrResponsible;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Identification No
   */
  @Column({
    type: 'varchar'
  })
  identification_id: string;

  // @ManyToOne(() => Identification)
  // @JoinColumn({ name: 'identification_id' })
  // identification: Identification;

  /**
   * SSN No
   */
  @Column({
    type: 'varchar'
  })
  ssnid: string;

  /**
   * Passport No
   */
  @Column({
    type: 'varchar'
  })
  passport_id: string;

  // @ManyToOne(() => Passport)
  // @JoinColumn({ name: 'passport_id' })
  // passport: Passport;

  /**
   * Gender
   */
  @Column({
    type: 'varchar'
  })
  sex: string;

  /**
   * Private Street
   */
  @Column({
    type: 'varchar'
  })
  private_street: string;

  /**
   * Private Street2
   */
  @Column({
    type: 'varchar'
  })
  private_street2: string;

  /**
   * Private City
   */
  @Column({
    type: 'varchar'
  })
  private_city: string;

  /**
   * Private Zip
   */
  @Column({
    type: 'varchar'
  })
  private_zip: string;

  /**
   * Home-Work Distance unit
   */
  @Column({
    type: 'varchar'
  })
  distance_home_work_unit: string;

  /**
   * Marital Status
   */
  @Column({
    type: 'varchar'
  })
  marital: string;

  /**
   * Spouse Legal Name
   */
  @Column({
    type: 'varchar'
  })
  spouse_complete_name: string;

  /**
   * Employee Type
   */
  @Column({
    type: 'varchar'
  })
  employee_type: string;

  /**
   * Job Title
   */
  @Column({
    type: 'varchar'
  })
  job_title: string;

  /**
   * Date Version
   */
  @Column({
    type: 'datetime'
  })
  date_version: Date;

  /**
   * Passport Expiration Date
   */
  @Column({
    type: 'datetime'
  })
  passport_expiration_date: Date;

  /**
   * Spouse Birthdate
   */
  @Column({
    type: 'datetime'
  })
  spouse_birthdate: Date;

  /**
   * Departure Date
   */
  @Column({
    type: 'datetime'
  })
  departure_date: Date;

  /**
   * Contract Start Date
   */
  @Column({
    type: 'datetime'
  })
  contract_date_start: Date;

  /**
   * Contract End Date
   */
  @Column({
    type: 'datetime'
  })
  contract_date_end: Date;

  /**
   * End of Trial Period
   */
  @Column({
    type: 'datetime'
  })
  trial_date_end: Date;

  /**
   * Additional Information
   */
  @Column({
    type: 'varchar'
  })
  departure_description: string;

  /**
   * Additional Note
   */
  @Column({
    type: 'varchar'
  })
  additional_note: string;

  /**
   * Wage
   */
  @Column({
    type: 'int'
  })
  wage: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Is Custom Job Title
   */
  @Column({
    type: 'boolean'
  })
  is_custom_job_title: boolean;

  /**
   * Is Flexible
   */
  @Column({
    type: 'boolean'
  })
  is_flexible: boolean;

  /**
   * Is Fully Flexible
   */
  @Column({
    type: 'boolean'
  })
  is_fully_flexible: boolean;

  /**
   * Last Modified on
   */
  @Column({
    type: 'datetime'
  })
  last_modified_date: Date;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}