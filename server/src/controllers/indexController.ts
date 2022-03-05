import {Request, Response} from 'express';
import db from '../db';

class IndexControllers {

    public index(req: Request, res:Response){
        const consult = db.query('\dt');
        res.json({
            message: 'User Added successfully',
            body: {
                consult
            }
        })
    };
};

export const indexControllers = new IndexControllers();
