import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from '../shared/shared.module';
const ROUTES = [{
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuardService],
    children: [
        { path: '', loadChildren: () => import('app/dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'courses', loadChildren: () => import('app/courses/courses.module').then(m => m.CoursesModule) },
        { path: 'students', loadChildren: () => import('app/students/students.module').then(m => m.StudentsModule) },
        { path: 'teachers', loadChildren: () => import('app/teachers/teachers.module').then(m => m.TeachersModule) },
        { path: 'schedule', loadChildren: () => import('app/schedule/schedule.module').then(m => m.ScheduleModule) },
        { path: 'absence-requests', loadChildren: () => import('app/absence-requests/absence-requests.module').then(m => m.AbsenceRequestsModule) },
        { path: 'feedbacks', loadChildren: () => import('app/feedback/feedback.module').then(m => m.FeedbackModule) },
        { path: 'settings', loadChildren: () => import('app/settings/setting.module').then(m => m.SettingModule) },
        { path: 'check-attendance', loadChildren: () => import('app/check-attendance/check-attendance.module').then(m => m.CheckAttendanceModule) },
        { path: 'check-attendance/quiz', loadChildren: () => import('app/check-attendance-quiz/check-attendance-quiz.module').then(m => m.CheckAttendanceQuizModule) },
        { path: 'quiz', loadChildren: () => import('app/quiz/quiz.module').then(m => m.QuizModule) },
        { path: 'statistic', loadChildren: () => import('app/statistic/statistic.module').then(m => m.StatisticModule) },
        { path: 'classes', loadChildren: () => import('app/classes/classes.module').then(m => m.ClassesModule) },
        { path: 'programs', loadChildren: () => import('app/programs/programs.module').then(m => m.ProgramsModule) },
        { path: 'semesters', loadChildren: () => import('app/semesters/semesters.module').then(m => m.SemestersModule) },
        { path: 'change-password', component: ChangePasswordComponent },
    ]
}, ];
@NgModule({
    declarations: [
        LayoutComponent,
        ChangePasswordComponent,
    ],
    imports: [
        FormsModule,
        HttpModule,
        SharedModule,
        RouterModule.forChild(ROUTES),
    ],
    providers: [],
})

export class LayoutModule {}
