import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { StudentRegistrationComponent } from 'app/student-registration/student-registration.component';
import { CompanyListPendingComponent } from 'app/manage-company/company-list-pending/company-list-pending.component';
import { RequestListComponent } from 'app/manage-company/request-list/request-list.component';
import { ApproveCompanyComponent } from 'app/manage-company/approve-company/approve-company.component';
import { ApproveTPOComponent } from 'app/manage-tpo/approve-tpo/approve-tpo.component';
import { TPOListPendingComponent } from 'app/manage-tpo/tpolist-pending/tpolist-pending.component';
import { TestComponent } from 'app/test/test.component';
import {EmailConversationComponent} from 'app/email-conversation/email-conversation.component';
import{AddStudentComponent} from 'app/add-student/add-student.component';
import { AddQuestionsComponent } from 'app/exam-management/add-questions/add-questions.component';
import { CreateExamComponent } from 'app/exam-management/create-exam/create-exam.component';
import {SubTpoRegistrationComponent} from 'app/manage-tpo/sub-tpo-registration/sub-tpo-registration.component';
import{CreateRequirementComponent} from '../../requirement-management/create-requirement/create-requirement.component';
import{ViewRequirementComponent}from '../../requirement-management/view-requirement/view-requirement.component';
import {
    AuthGuardService as AuthGuard
} from '../../auth-guard.service';
import {
    RoleGuardService as RoleGuard
} from '../../role-guard.service';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    

    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
    {
        path: 'companylistpending', component: CompanyListPendingComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['Admin']
        }  },
    {
        path: 'companyrequirementlist', component: RequestListComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['Company']
        }  },
    {
        path: 'approvedcompany', component: ApproveCompanyComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['Admin']
        }  },
    {
        path: 'tpolistpending', component: TPOListPendingComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['Admin']
        }  },
    {
        path: 'approvedtpo', component: ApproveTPOComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['Admin']
        }  },
    {
        path: 'studentregistration', component: StudentRegistrationComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['TPO']
        }  },
    {
        path: 'email-conversation', component: EmailConversationComponent,
        canActivate: [AuthGuard] },
    {
        path: 'add-student', component: AddStudentComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['TPO','Company']
        } },
    {
        path: 'add-questions', component: AddQuestionsComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['Company','TPO']
        } },
    {
        path: 'create-exam', component: CreateExamComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['Company']
        } },
    {
        path: 'sub-tpo-registration', component: SubTpoRegistrationComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['TPO']
        } },
    {
        path: 'add-requirement', component: CreateRequirementComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['Admin']
        } },
    {
        path: 'view-requirement', component: ViewRequirementComponent,
        canActivate: [RoleGuard],
        data: {
            expectedRole: ['Admin']
        }  },
    {
        path: 'test',
        component: TestComponent,
    },
];
