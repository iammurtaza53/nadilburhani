import { Component, OnInit } from '@angular/core';


import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Profile',
      url: '/profile',
      path2: './assets/images/profile.png',
    },
    {
      title: '  Attendence',
      url: '/attendence',
      path1: './assets/images/attendence.png',
    },
    {
      title: 'News',
      url: '/news',
      path1: './assets/images/news.png',
    },
    {
      title: "Gallery",
      url: '/gallery',
      path1: './assets/images/gallery.png',
    },
    {
      title: 'Archery',
      url: '/archery',
      path: './assets/images/archery.png',
    },
    {
      title: 'Cricket Academy',
      url: '/cricket',
      path: './assets/images/cricket.png',
    },
    {
      title: 'Horse Riding',
      url: '/horse-riding',
      path: './assets/images/horse.png',
    },
    {
      title: 'Football',
      url: '/football',
      path: './assets/images/futsal.png',
    },
    {
      title: 'Logut',
       url: '/login',
       path1: './assets/images/logout.png',
     },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
