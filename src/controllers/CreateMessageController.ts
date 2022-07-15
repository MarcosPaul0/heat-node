import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

export class CreateMessageController {
  async handle(req: Request, res: Response): Promise<Response>{
    const { message } = req.body;
    const { user_id } = req;

    const createMessageService = new CreateMessageService();

    const result = await createMessageService.execute(message, user_id); 

    return res.status(200).json(result);
  }
}