import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../db';

class IndexController {

    public async create(req: Request, res: Response): Promise<object> {
        let value1 = parseInt(req.body.value1);
        let value2 = parseInt(req.body.value2);
        let result = value1 + value2;
        let fibo = [0, 1, 1, 2, 3, 5];

        for(let i = 6; i <= result; i++){
            fibo.push(fibo[i-1] + fibo[i-2]);
        }
        let fibonacci = fibo.includes(result);
        return res.json({ fibonacci: fibonacci, result: result });
    }

}

export const indexController = new IndexController;