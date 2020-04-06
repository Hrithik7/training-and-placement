import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { StudentRegistrationComponent } from '../../student-registration/student-registration.component';
import { CompanyListPendingComponent } from '../../manage-company/company-list-pending/company-list-pending.component';
import { ApproveCompanyComponent } from '../../manage-company/approve-company/approve-company.component';
import { RequestListComponent } from '../../manage-company/request-list/request-list.component';
import { TPOListPendingComponent } from '../../manage-tpo/tpolist-pending/tpolist-pending.component';
import { ApproveTPOComponent } from '../../manage-tpo/approve-tpo/approve-tpo.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { CreateExamComponent } from '../../exam-management/create-exam/create-exam.component';
import { AddQuestionsComponent } from '../../exam-management/add-questions/add-questions.component';
import {Ng2SearchPipeModule,} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { SubTpoRegistrationComponent } from '../../manage-tpo/sub-tpo-registration/sub-tpo-registration.component';
import { CreateRequirementComponent } from '../../requirement-management/create-requirement/create-requirement.component';
import { ViewRequirementComponent } from '../../requirement-management/view-requirement/view-requirement.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { TestComponent } from 'app/test/test.component';
import { EmailConversationComponent } from 'app/email-conversation/email-conversation.component';
import { AddStudentComponent } from 'app/add-student/add-student.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFileUploadModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    StudentRegistrationComponent,
    CompanyListPendingComponent,
    ApproveCompanyComponent,
    RequestListComponent,
    TPOListPendingComponent,
    ApproveTPOComponent,
    TestComponent,
    EmailConversationComponent,
    AddStudentComponent,
    CreateExamComponent,
    AddQuestionsComponent,
    SubTpoRegistrationComponent,
    CreateRequirementComponent,
    ViewRequirementComponent
  ]
})

export class AdminLayoutModule { }
