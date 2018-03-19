import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './panel/panel.component';
import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { PaginateComponent } from './paginate/paginate.component';
import { InputComponent } from './input/input.component';
import { InputErrorMessageComponent } from './input-error-message/input-error-message.component';
import { FormOptionsButtonsComponent } from './form-options-buttons/form-options-buttons.component';
import { CoreModule } from './../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PanelComponent,
    MenuComponent,
    TopbarComponent,
    UserInfoComponent,
    FooterComponent,
    AdminDashboardComponent,
    SnackbarComponent,
    ModalDeleteComponent,
    InfoboxComponent,
    PaginateComponent,
    InputComponent,
    InputErrorMessageComponent,
    FormOptionsButtonsComponent,
  ],
  exports: [
    PanelComponent,
    MenuComponent,
    TopbarComponent,
    UserInfoComponent,
    FooterComponent,
    AdminDashboardComponent,
    SnackbarComponent,
    ModalDeleteComponent,
    InfoboxComponent,
    PaginateComponent,
    InputComponent,
    InputErrorMessageComponent,
    FormOptionsButtonsComponent,
  ]
})
export class SharedModule { }
