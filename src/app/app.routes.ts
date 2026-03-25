import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Layout } from './layout/components/layout';
import { WtgProduction } from './pages/wtg-production/wtg-production';
import { ProductionPlan } from './pages/production-plan/production-plan';
import { ComponentSerial } from './pages/component-serial/component-serial';
import { ProductionPlanList } from './pages/production-plan-list/production-plan-list';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'home',
        component: Layout,
        children: [
            {
                path: 'wtg-production',
                component: WtgProduction
            },
            {
                path: 'production-plan/create',
                component: ProductionPlan
            },
            {
                path: 'component-serial',
                component: ComponentSerial
            },
            {
                path: 'production-plan', 
                component: ProductionPlanList
            }
        ]
    }
];
