import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "../views/DashboardView.vue";
import AnalyticsView from "../views/AnalyticsView.vue";
import ReportsView from "../views/ReportsView.vue";
import UsersView from "../views/UsersView.vue";
import SettingsView from "../views/SettingsView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: DashboardView,
    },
    {
        path: "/analytics",
        name: "Analytics",
        component: AnalyticsView,
    },
    {
        path: "/reports",
        name: "Reports",
        component: ReportsView,
    },
    {
        path: "/users",
        name: "Users",
        component: UsersView,
    },
    {
        path: "/settings",
        name: "Settings",
        component: SettingsView,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFoundView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;