import express from 'express';
import MealsService from '../services/MealsService';

const mealsService = new MealsService();

const router = express.Router();
router.get('/', (req,res) => {
    res.status(200).send(mealsService.getAll());
});

// router.get('/:id', (req, res) => {
//     res.status(200).send(mealsService.get(req.params.id));
// });

router.get('/:id', (req, res) => {
    var meal = mealsService.get(req.params.id);
    if(meal === null){
        res.status(400).send('meal not found');
    } else {
        res.status(200).send(mealsService.get(req.params.id));
    }
});


router.post('/', (req, res) => {
    console.log(req);
    //res.status(200).send(JSON.stringify(req));
    res.status(200).send(mealsService.addMeal(req));
});

router.post('/test', (req, res) => {
    res.status(200).send(mealsService.test(req));
});


export default router;