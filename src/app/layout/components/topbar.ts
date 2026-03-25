import { Component } from "@angular/core";

@Component({
    selector: 'app-topbar',
    template: `
        <div class="p-5">
            <div class="flex items-center gap-1">
                <!-- <img src="../../../../assets/img/EnvisionLogo.png" alt="Logo" width="40" />
                <p class="font-semibold">Envision</p> -->
                <div class="ml-auto text-gray-500 flex gap-2">
                    <button type="button" (click)="toggleDarkMode()" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <path fill="currentColor" d="M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.6 8.6 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05m-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.8 9.8 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z" />
                        </svg>
                    </button>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="M12 2a10 10 0 0 0-7.35 16.76a10 10 0 0 0 14.7 0A10 10 0 0 0 12 2m0 18a8 8 0 0 1-5.55-2.25a6 6 0 0 1 11.1 0A8 8 0 0 1 12 20m-2-10a2 2 0 1 1 2 2a2 2 0 0 1-2-2m8.91 6A8 8 0 0 0 15 12.62a4 4 0 1 0-6 0A8 8 0 0 0 5.09 16A7.9 7.9 0 0 1 4 12a8 8 0 0 1 16 0a7.9 7.9 0 0 1-1.09 4" />
                    </svg>
                </div>
            </div>
        </div>
    `,
    styles: ``
})

export class TopBar {
    toggleDarkMode(){
        const element = document.querySelector('html');
        element?.classList.toggle('my-app-dark');
    }
}