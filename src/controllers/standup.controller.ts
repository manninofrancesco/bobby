import { StandupService } from '../services/standup.service';

class StandupController {
    getStandupTable = async (req, res, next) => {
        try {
            var standupService = new StandupService();
            res.json(await standupService.getStandupTable());
        } catch (err) {
            console.error(`Error while getting Standup Table`, err.message);
            next(err);
        }
    }
}

export { StandupController }