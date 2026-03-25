import { Component } from "@angular/core";
import { Menu } from "./menu";

@Component({
    selector: 'app-sidebar',
    imports: [Menu],
    template: `
        <div class="grid grid-cols-[256px_1fr] h-full fixed z-50">
            <div class="bg-(--surface-card) p-2 border-r border-surface">
                <div class="flex items-center gap-1 mt-1.5 ml-4">
                    <img src="../../../../assets/img/EnvisionLogo.png" alt="Logo" width="40" />
                    <p class="font-semibold text-xl">Envision</p>
                </div>
                <button type="button" 
                    class="absolute top-7 -right-4 bg-(--surface-card) p-0.5 text-gray-500 border border-gray-200 rounded-full hover:bg-gray-50 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="m11.29 12l3.54-3.54a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42L13.41 17a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41Z" />
                    </svg>
                </button>
                <div class="mt-3">
                    <app-menu />
                </div>
            </div>
        </div>
    `
})

export class SideBar {

}