import { Entity } from "../../core/domain/Entity";

type ManagerProps = {
    name: string;
    description: string;
    createdAt?: Date;

}

export class Manager extends Entity<ManagerProps> {
  private constructor(props: ManagerProps, id?: string) {
    super(props, id);

  }    

  static create(props: ManagerProps, id?: string) {
    const lead = new Manager({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }, id);
    
    return lead;
  }

}