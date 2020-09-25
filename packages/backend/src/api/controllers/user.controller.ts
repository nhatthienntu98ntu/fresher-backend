import { NextFunction, Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { IUser } from '../../interfaces';
import UserModel from '../../models/user.model';

export const getAllUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        UserModel.find({})
            .populate('statusId')
            .exec(function(err, data) {
                return res.status(200).json(data);
            });
    } catch (error) {
        next(error);
    }
};

export const getOneUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id: String = req.params.id;
        UserModel.findById(id).then(data => {
            return res.status(200).json(data);
        });
    } catch (error) {
        next(error);
    }
};

export const cretaeUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user: IUser = {
            ...req.body.user,
            createdAt: new Date(),
        };
        UserModel.create(user).then(result => {
            return res.status(200).json({ message: 'Success' });
        });
    } catch (error) {
        next(error);
    }
};

//*Edit One User
export const editUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id: String = req.params.id;
        // const user = {
        //     email: req.body.email,
        //     password: req.body.password,
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     avatar: req.body.avatar,
        //     gender: req.body.gender,
        //     birthday: req.body.birthday,
        //     phones: req.body.phones,
        //     descriptionBlocked: req.body.descriptionBlocked,
        //     groupRoleIds: req.body.groupRoleIds,
        //     addressIds: req.body.addressIds,
        //     pollResponseIds: req.body.pollResponseIds,
        //     statusId: req.body.statusId,
        // } as IUser;
        await UserModel.updateOne(
            { _id: id },
            {
                $set: {
                    ...req.body.user,
                },
            },
            {
                new: true,
            }
        ).then(result => {
            return res.status(200).json(result);
        });
    } catch (err) {
        next(err);
    }
};

export const disableUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        next(error);
    }
};
