import { Lead } from "../../domain/entities/lead";


type CreateLeadSubmissionRequest = {
   leadId: string;
   managerId: string;
}

export class CreateSubmissionClient {
    execute({leadId, managerId}:  CreateLeadSubmissionRequest) {

        // const submession = Lead.create({
       
        // })

        // return submession;

    }
}