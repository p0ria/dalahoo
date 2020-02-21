import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {MasterRoutingModule} from "./master-routing.module";
import {COMPONENTS} from "./components";

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
    MasterRoutingModule
  ]
})
export class MasterModule {

}
