import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RaceComponent } from "./components/race/race.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'race/:id',
        component: RaceComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
]

export default routes;