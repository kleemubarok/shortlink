import { PB_URL } from '$env/static/public';
import Pocketbase from 'pocketbase';

const pb = new Pocketbase(PB_URL);

export default pb;
