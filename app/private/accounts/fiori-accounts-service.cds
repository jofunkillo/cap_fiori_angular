using privateService as PS from '../../../srv/private-service';

annotate PS.Account with @(
  Common.SemanticKey: [name],  
  UI:{
    SelectionFields: [name, code],
    Identification: [{Value:code}],        
    LineItem: [
      { Label: 'code', Value: code},      
      { Label: 'Name', Value: name},
			{ Label: 'Descr', Value: descr}
    ],
    HeaderInfo: {
			TypeName: 'Account',
			TypeNamePlural: 'Accounts',
      Title: {Value: name},
			Description: { Value: descr }
		}
  }
){   
  name @title:'Name' @odata.Type:'Edm.String' @mandatory @sap.display.format: 'UpperCase';   
  descr @title:'Description' @odata.Type:'Edm.String' @mandatory;
};

