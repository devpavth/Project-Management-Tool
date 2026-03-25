import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ReactiveFormsModule } from "@angular/forms";
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { DatePickerModule } from 'primeng/datepicker';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from "@angular/common";
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { StepperModule } from 'primeng/stepper';
import { InputNumberModule } from 'primeng/inputnumber';
import { RouterModule } from "@angular/router";
import { TagModule } from 'primeng/tag';

@NgModule({
    exports: [
        ButtonModule,
        RippleModule,
        InputTextModule,
        FloatLabelModule,
        ReactiveFormsModule,
        MenuModule,
        TableModule,
        DatePickerModule,
        MultiSelectModule,
        SelectModule, 
        CommonModule,
        ToggleSwitchModule,
        PanelModule,
        DialogModule,
        StepperModule,
        InputNumberModule,
        RouterModule,
        TagModule
    ]
})

export class PrimeNGComponents {}