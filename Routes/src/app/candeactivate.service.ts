//candeactivate
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { FormComponent } from "./form/form.component";

export class CanDeactivateGuardService implements CanDeactivate<FormComponent>{
    canDeactivate(component: FormComponent) {
        const r=component.canexit() 
        return r;
        
    }
}