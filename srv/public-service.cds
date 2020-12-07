using {com.apptest as test} from '../db/schema';

@(path: '/publicServices')
service publicService { 
     entity Center as select from test.Center{
        *,        
    };
    entity Account as select from test.Account{
        *,        
    };
}