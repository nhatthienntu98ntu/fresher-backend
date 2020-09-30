import { json } from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { IStatus } from '../../interfaces';
import statusModel from '../../models/status.model';
import { StatusService } from '../../services';

export const getAllStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    StatusService.getAllStatus().then(result => {
        res.status(200).json({
            message: 'Request successfully',
            Response: result,
        });
    });
};

export const addStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = {
        name: req.body.name,
        description: req.body.description,
    } as IStatus;

    StatusService.addStatusService(status)
        .then(result => {
            res.status(200).json({
                message: 'Add successfully',
                Response: result,
            });
        })
        .catch(err => {
            next(err);
        });
};

export const updateStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = {
        _id: req.params._id,
        name: req.body.name,
        description: req.body.description,
    } as IStatus;
    StatusService.updateStatusService(status)
        .then(result => {
            return res.status(200).json({
                message: 'Update successful',
                Result: result,
            });
        })
        .catch(err => {
            next(err);
        });
};

export const deleteStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    StatusService.deleteStatusService(req.params._id).then(result => {
        res.status(200).json({
            message: 'Delete succesfully',
            Response: result,
        });
    });
};
