import { Router } from "express";
import * as Pagecontroller from '../controllers/pageController';
import * as Searchcontroller from '../controllers/searchController';

const router = Router();

router.get('/', Pagecontroller.home);
router.get('/', Pagecontroller.dogs);
router.get('/', Pagecontroller.cats);
router.get('/', Pagecontroller.fishes);

router.get('/', Searchcontroller.search);

export default router;