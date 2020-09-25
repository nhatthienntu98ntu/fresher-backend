import { NextFunction, Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { IStatus } from '../../interfaces';
import StatusModel from '../../models/status.model';

export const getAllStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        StatusModel.find({}).then(result => {
            return res.status(200).json(result);
        });
    } catch (error) {
        next(error);
    }
};

export const createStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const status: IStatus = {
            ...req.body.status,
        };
        StatusModel.create(status).then(result => {
            return res.status(200).json({ message: 'Success status' });
        });
    } catch (error) {
        next(error);
    }
};
