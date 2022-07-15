import { Request, Response } from 'express';
import { GetLast3MessagesService } from '../services/GetLast3MessagesService';

export class GetLast3MessagesController {
  async handle(req: Request, res: Response): Promise<Response>{

    const getLast3MessagesService = new GetLast3MessagesService();

    const result = await getLast3MessagesService.execute();

    return res.status(200).json(result);
  }
}