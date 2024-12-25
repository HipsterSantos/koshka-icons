import { Component, Input } from '@angular/core';

@Component({
  selector: 'kosh-icon',
  templateUrl: './hoshka-icons-component.html',
  styleUrls: ['./hoshka-icons-component.scss']
})
export class KoshIconComponent {
  @Input() icon: string = '';
  @Input() iconColor: string = '#141b34';
  @Input() width: string = '24';
  @Input() height: string = '24';
  @Input() viewbox: string = "0 0 24 24"

  // A mapping of icon names to SVG paths or components
  icons: Record<string, string> = {
    'add-or-create-icon':`
      <svg width="${this.width}" height="${this.height}" viewBox="${this.viewbox}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V20" stroke="${this.iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 12H20" stroke="${this.iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    'more-icon': `
      <path fill="${this.iconColor}" d="M402.185-782.522a2.1,2.1,0,0,0,1.543-.642,2.1,2.1,0,0,0,.642-1.543,2.1,2.1,0,0,0-.642-1.543,2.1,2.1,0,0,0-1.543-.642,2.1,2.1,0,0,0-1.543.642,2.1,2.1,0,0,0-.642,1.543,2.1,2.1,0,0,0,.642,1.543A2.1,2.1,0,0,0,402.185-782.522Zm0-6.554a2.1,2.1,0,0,0,1.543-.642,2.1,2.1,0,0,0,.642-1.543,2.1,2.1,0,0,0-.642-1.543,2.1,2.1,0,0,0-1.543-.642,2.1,2.1,0,0,0-1.543.642,2.1,2.1,0,0,0-.642,1.543,2.1,2.1,0,0,0,.642,1.543A2.1,2.1,0,0,0,402.185-789.076Zm0-6.554a2.1,2.1,0,0,0,1.543-.642,2.1,2.1,0,0,0,.642-1.543,2.1,2.1,0,0,0-.642-1.543,2.1,2.1,0,0,0-1.543-.642,2.1,2.1,0,0,0-1.543.642,2.1,2.1,0,0,0-.642,1.543,2.1,2.1,0,0,0,.642,1.543A2.1,2.1,0,0,0,402.185-795.631Z" transform="translate(-400 800)"/>
    `,
    'home-icon': `
      <path fill="${this.iconColor}" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    `
    // Add more icons as needed...
  };

  getIconTemplate(): string {
    return this.icons[this.icon] || ''; // Fallback to empty if icon is not found
  }
}
