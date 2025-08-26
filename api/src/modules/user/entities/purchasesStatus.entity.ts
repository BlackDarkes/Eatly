import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("purchases_status")
export class PurchasesStatusEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column("text")
  status: string;
}