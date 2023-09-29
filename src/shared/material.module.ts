import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDividerModule,
        MatListModule,
        MatButtonToggleModule,
        MatTabsModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDividerModule,
        MatListModule,
        MatButtonToggleModule,
        MatTabsModule
    ],
})
export class MaterialModule { }