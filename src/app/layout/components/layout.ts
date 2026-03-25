import { Component } from "@angular/core";
import { TopBar } from "./topbar";
import { SideBar } from "./sidebar";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-layout',
    imports: [TopBar, SideBar, RouterOutlet, CommonModule],
    template: `
        <div class="grid grid-cols-[256px_1fr] min-h-screen relative">
            <app-sidebar />
            <div class="grid grid-rows-[auto_1fr] min-w-0">
                <div class="backdrop-blur-[10px] sticky top-0 z-40"
                    style="background: rgba(255,255,255,0.7);">
                    <app-topbar />
                </div>
                <div class="min-w-0">
                    <router-outlet />
                </div>
            </div>
        </div>
    `,
    styles: ``
})

export class Layout {
}