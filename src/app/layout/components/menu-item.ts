import { Component, input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
    selector: 'app-menu-item',
    imports: [RouterModule],
    template: `
        <li>
            <a class="flex items-center gap-2 text-gray-500 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                [routerLink]="item()?.routerLink"
                (click)="toggle()">
                @if(item()?.['svgIcon']){
                    <span [innerHTML]="getSafeSvg(item()?.['svgIcon'])"></span>
                }
                {{ item()?.label }}
            </a>

            @if(item()?.items && expanded){
                <ul class="ml-4 border-l-2 border-surface">
                    @for(child of item()?.items; track child){
                        <app-menu-item [item]="child" />
                    }
                </ul>
            }
        </li>
    `
})

export class AppMenuitem {
    item = input<MenuItem>();
    expanded = false;

    constructor(private sanitizer: DomSanitizer){}

    getSafeSvg(svg: string): SafeHtml{
        return this.sanitizer.bypassSecurityTrustHtml(svg);
    }

    toggle(){
        if (this.item()?.items) { 
            this.expanded = !this.expanded;
        }
    }
}