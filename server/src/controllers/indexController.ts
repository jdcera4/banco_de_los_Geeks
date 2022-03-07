import { Request, Response } from 'express';
import pool from '../db';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'API is in /api/games'});
    }

    public async create(req: Request, res: Response): Promise<object> {
        let value1 = req.body.value1;
        let value2 = req.body.value2;
        let result = value1 + value2;

        let a = 0;
        let b = 1;
        let bol = false;
        if(result === 0){
            bol = true;
        }

        for(let i = 1; i <= result; i++){
            if(result === a){
                bol = true;
            }
            let c = a+b;
            a=b;
            b=c;
        }
        return res.json({ fibonacci: bol, result: result });
    }

}

export const indexController = new IndexController;