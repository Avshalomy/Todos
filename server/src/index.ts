import 'dotenv/config';

import { server } from './server';
import  connect   from './mongoDb';

(async () => {
  await connect( {db:'mongodb://127.0.0.1:27017/todo1'});
  await server();
})();