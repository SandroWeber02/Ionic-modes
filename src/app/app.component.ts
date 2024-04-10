import { Component } from '@angular/core';
import { FolderPage } from './folder/folder.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'alerts', url: '/alert', icon: 'alert' },
    { title: 'badges', url: '/badges', icon: 'alert' },
    { title: 'reorder', url: '/reorder', icon: 'reorder-four' },
    { title: 'checkbox', url: '/checkbox', icon: 'checkmark' },
    { title: 'datetime', url: '/datetime', icon: 'calendar' },
    { title: 'toast', url: '/toast', icon: 'alert-circle' },
    { title: 'infinit-scroll', url: '/infinit-scroll', icon: 'infinite' },
    { title: 'select', url: '/select', icon: 'checkmark' },
    { title: 'icon', url: '/icon', icon: 'image' },
    { title: 'cards', url: '/cards', icon: 'grid' },
    { title: 'action-sheet', url: '/action-sheet', icon: 'list' },
    { title: 'ranger', url: '/ranger', icon: 'map' },
    { title: 'modal', url: '/modal', icon: 'albums' },
    { title: 'content', url: '/content', icon: 'document-text' },
    { title: 'list', url: '/list', icon: 'list-circle' },
    { title: 'button', url: '/button', icon: 'arrow-forward' },
    { title: 'toggles', url: '/toggles', icon: 'toggle' },
    { title: 'toolbar', url: '/toolbar', icon: 'hammer' },
    { title: 'input', url: '/input', icon: 'create' },
    { title: 'radio', url: '/radio', icon: 'radio-button-on' },
    { title: 'searchbar', url: '/searchbar', icon: 'search' },
    
    { title: 'Navgtion', url: '/pagina2', icon: 'navigate' },
    
   

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

 nav = FolderPage;
}
