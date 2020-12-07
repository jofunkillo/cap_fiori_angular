using {com.apptest as test} from '../db/schema';

@(path: '/privateServices')
service privateService { 
    entity Center as select from test.Center{
        *,        
    };
    entity Account as select from test.Account{
        *,        
    };
}