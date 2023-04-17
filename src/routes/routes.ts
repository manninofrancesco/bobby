import express from 'express';
const router = express.Router();
import { StandupController } from '../controllers/standup.controller'

router.get('/GetStandupTable', await new StandupController().getStandupTable);

export { router };