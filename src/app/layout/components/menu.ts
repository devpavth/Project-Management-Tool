import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { AppMenuitem } from "./menu-item";

@Component({
    selector: 'app-menu',
    imports: [AppMenuitem],
    template: `
        <ul>
            @for(item of model; track item){
                <app-menu-item [item]="item" />
            }
        </ul>
    `
})

export class Menu implements OnInit {
    model: MenuItem[] = [];

    ngOnInit(): void {
        this.model = [
            {
                label: 'Production Plan',
                svgIcon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="M16 20H8a3 3 0 0 1-3-3V7a1 1 0 0 0-2 0v10a5 5 0 0 0 5 5h8a1 1 0 0 0 0-2m-6-7a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2h-5a1 1 0 0 0-1 1m11-4.06a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19a.3.3 0 0 0-.09 0a.9.9 0 0 0-.33-.11H10a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM19 15a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 .18 1H11a1 1 0 0 0 0 2h8Z" />
                    </svg>
                    `,
                routerLink: ['/home/production-plan']
            },
            {
                label: 'Component Allocation',
                svgIcon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="M20.49 7.52a.2.2 0 0 1 0-.08a.2.2 0 0 1 0-.07v-.09l-.06-.15a.5.5 0 0 0-.09-.11l-.09-.08h-.05l-3.94-2.49l-3.72-2.3a.9.9 0 0 0-.29-.15h-.08a.8.8 0 0 0-.27 0h-.1a1.1 1.1 0 0 0-.33.13L4 6.78l-.09.07l-.09.08l-.1.07l-.05.06l-.06.15v.15a.7.7 0 0 0 0 .2v8.73a1 1 0 0 0 .47.85l7.5 4.64l.15.06h.08a.86.86 0 0 0 .52 0h.08l.15-.06L20 17.21a1 1 0 0 0 .47-.85V7.63s.02-.07.02-.11M12 4.17l1.78 1.1l-5.59 3.46l-1.79-1.1Zm-1 15l-5.5-3.36V9.42l5.5 3.4Zm1-8.11l-1.91-1.15l5.59-3.47l1.92 1.19Zm6.5 4.72L13 19.2v-6.38l5.5-3.4Z" />
                    </svg>
                    `,
                routerLink: ['/home/component-allocation']
            },
            {
                label: 'WTG Production',
                svgIcon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="m21.32 5.05l-6-2h-.07a.7.7 0 0 0-.14 0h-.43L9 5L3.32 3.05a1 1 0 0 0-.9.14A1 1 0 0 0 2 4v14a1 1 0 0 0 .68.95l6 2a1 1 0 0 0 .62 0l5.7-1.9L20.68 21a1.2 1.2 0 0 0 .32 0a.94.94 0 0 0 .58-.19A1 1 0 0 0 22 20V6a1 1 0 0 0-.68-.95M8 18.61l-4-1.33V5.39l4 1.33Zm6-1.33l-4 1.33V6.72l4-1.33Zm6 1.33l-4-1.33V5.39l4 1.33Z" />
                    </svg>
                    `,
                routerLink: ['/home/wtg-production']
            },
            {
                label: 'WTG Quality',
                svgIcon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="m20.87 17.25l-2.71-4.68A6.9 6.9 0 0 0 19 9.25a7 7 0 0 0-14 0a6.9 6.9 0 0 0 .84 3.32l-2.71 4.68a1 1 0 0 0 .87 1.5h2.87l1.46 2.46a1 1 0 0 0 .18.22a1 1 0 0 0 .69.28h.14a1 1 0 0 0 .73-.49L12 17.9l1.93 3.35a1 1 0 0 0 .73.48h.14a1 1 0 0 0 .7-.28a.9.9 0 0 0 .17-.21l1.46-2.46H20a1 1 0 0 0 .87-.5a1 1 0 0 0 0-1.03M9.19 18.78l-.89-1.49a1 1 0 0 0-.85-.49H5.72l1.43-2.48a7 7 0 0 0 3.57 1.84ZM12 14.25a5 5 0 1 1 5-5a5 5 0 0 1-5 5m4.55 2.55a1 1 0 0 0-.85.49l-.89 1.49l-1.52-2.65a7.06 7.06 0 0 0 3.56-1.84l1.43 2.48Z" />
                    </svg>
                `
            },
            {
                label: 'Masters',
                svgIcon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="currentColor" d="m2.5 8.86l9 5.2a1 1 0 0 0 1 0l9-5.2A1 1 0 0 0 22 8a1 1 0 0 0-.5-.87l-9-5.19a1 1 0 0 0-1 0l-9 5.19A1 1 0 0 0 2 8a1 1 0 0 0 .5.86M12 4l7 4l-7 4l-7-4Zm8.5 7.17L12 16l-8.5-4.87a1 1 0 0 0-1.37.37a1 1 0 0 0 .37 1.36l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.36a1 1 0 0 0-1.37-.37Zm0 4L12 20l-8.5-4.87a1 1 0 0 0-1.37.37a1 1 0 0 0 .37 1.36l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.36a1 1 0 0 0-1.37-.37Z" />
                    </svg>
                `,
                items: [
                    {
                        label: 'Components',
                        routerLink: ['/home/components']
                    },
                    {
                        label: 'Plants',
                        routerLink: ['/home/plants']
                    },
                    {
                        label: 'Tower Types',
                        routerLink: ['/home/tower-types']
                    },
                    {
                        label: 'Blade Types',
                        routerLink: ['/home/blade-types'] 
                    },
                    {
                        label: 'Projects'
                    }
                ]
            }
        ]
    }
}