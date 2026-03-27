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
                            <path fill="currentColor" d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.162t-2.163-3.2t-.8-3.938q0-3.1 1.713-5.625t4.587-3.7q.35-.125.725-.088t.625.238q.2.175.313.488t.112.812q.05 1.975.8 3.763T13 10.975t3.2 2.15t3.775.8q.525 0 .8.088t.45.287q.2.25.263.65t-.063.725q-1.15 2.875-3.7 4.6T12.075 22m0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.087t-3.45-2.413t-2.425-3.45T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20M14.3 7.3l-1.6-1.6q-.3-.3-.3-.7t.3-.7l1.6-1.6q.3-.3.7-.3t.7.3l1.6 1.6q.3.3.3.7t-.3.7l-1.6 1.6q-.3.3-.7.3t-.7-.3m5 3l-.6-.6q-.3-.3-.3-.7t.3-.7l.6-.6q.3-.3.7-.3t.7.3l.6.6q.3.3.3.7t-.3.7l-.6.6q-.3.3-.7.3t-.7-.3" />
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