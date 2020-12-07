using { sap.common.CodeList } from '@sap/cds/common';

namespace com.apptest;

entity Center: CodeList {
  key code: Integer;
}

entity Account: CodeList {
  key code: Integer;
}

