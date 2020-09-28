import ms from 'ms';
import { ITokenDecode, IUser, IUserLogin } from '../interfaces';
import UserModel from '../models/user.model';
import { generateToken } from '../utils/generateToken';
import { tokenExpiresIn } from '../config';
import * as bcrypt from 'bcrypt';
import userModel from '../models/user.model';

export const signinUserService = async (userLogin: IUserLogin) => {
    const user = await UserModel.findOne({
        email: userLogin.email,
    }).populate([{ path: 'grouproleIds' }]);

    if (!user) {
        throw new Error(`User not exist! ${userLogin.email}`);
    }

    const passwordValid = await bcrypt.compare(
        userLogin.password,
        user.password
    );

    if (!passwordValid) {
        throw new Error('Invalid password');
    }

    const payload: ITokenDecode = {
        uid: user._id,
        groupRoleIds: user.groupRoleIds,
    };

    const token = generateToken(payload);
    const expiresIn = ms(tokenExpiresIn);

    return { token, expiresIn };
};

export const getAllUserService = async () => {
    const users = await UserModel.find({}).populate([
        { path: 'statusId' },
        { path: 'blockedById' },
        // { path: 'addressIds' },
        // { path: 'groupRoleIds' },
        // { path: 'pollResponseIds' },
    ]);
    return users;
};

//* Note when use async but not use callback
export const signupUserService = async (userSignUp: IUser) => {
    const user = await UserModel.find({ email: userSignUp.email });

    if (user.length >= 1) {
        throw new Error('Email exists');
    }
    userSignUp.password = await bcrypt.hash(userSignUp.password, 10);
    if (!userSignUp.password) {
        throw new Error('Encode password failed');
    }

    return await UserModel.create(userSignUp);
};

export const getOneUserService = async (_id: String) => {
    const user = await UserModel.findOne({ _id: _id }).populate([
        { path: 'statusId' },
        { path: 'blockedById' },
    ]);
    return user;
};

export const updateUserService = async (userUpdate: IUser) => {
    const user = await userModel.findById(userUpdate._id);
    if (!user) {
        throw new Error('User not exist');
    }

    userUpdate.password = await bcrypt.hash(userUpdate.password, 10);

    return await userModel.updateOne(
        { _id: userUpdate._id },
        { $set: { ...userUpdate } },
        { new: true }
    );
};

export const disableUserService = async (_id: String) => {
    const user = await UserModel.findById(_id);

    if (!user) {
        throw new Error('User not exist');
    }

    return await UserModel.updateOne(
        { _id: _id },
        { $set: { isDelete: true } },
        { new: true }
    );
};
