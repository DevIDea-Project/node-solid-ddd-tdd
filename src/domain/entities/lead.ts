import { Entity } from "../../core/domain/Entity";

type LeadProps = {
    name: string;
    description: string;
    createdAt?: Date;
}

export class Lead extends Entity<LeadProps> {
  private constructor(props: LeadProps, id?: string) {
    super(props, id);

  }    

  static create(props: LeadProps, id?: string) {
    const lead = new Lead({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }, id);
    
    return lead;
  }

}