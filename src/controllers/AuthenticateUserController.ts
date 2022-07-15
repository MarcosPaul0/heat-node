import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { code } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    try {
      const result = await authenticateUserService.execute(code);
  
      return res.status(200).json(result);
    } catch(err) {
      return res.status(400).json({ error: err.message });
    }
  }
}