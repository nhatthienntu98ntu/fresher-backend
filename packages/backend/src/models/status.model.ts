import { Schema, model } from 'mongoose';
import { IStatus } from '../interfaces';

const statusSchema = new Schema({
    name: { type: String, required: true, default: '' },
    description: { type: String, required: true, default: '' },
});

export default model<IStatus>('status', statusSchema);
