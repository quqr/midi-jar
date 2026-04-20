import { app, Menu, shell, BrowserWindow, MenuItemConstructorOptions } from 'electron';
import i18n from './i18n';
import { resolveHtmlPath } from './util';

interface DarwinMenuItemConstructorOptions extends MenuItemConstructorOptions {
  selector?: string;
  submenu?: DarwinMenuItemConstructorOptions[] | Menu;
}

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  goTo(route: string) {
    this.mainWindow.loadURL(`${resolveHtmlPath('renderer.html')}#${route}`);
  }

  buildMenu(): Menu {
    const template = process.platform === 'darwin' ? this.buildDarwinTemplate() : [];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  buildDarwinTemplate(): MenuItemConstructorOptions[] {
    const subMenuAbout: DarwinMenuItemConstructorOptions = {
      label: i18n.t('mainMenu.midiJar'),
      submenu: [
        {
          label: i18n.t('mainMenu.aboutMidiJar'),
          selector: 'orderFrontStandardAboutPanel:',
        },
        { type: 'separator' },
        {
          label: i18n.t('mainMenu.preferences'),
          submenu: [
            {
              label: i18n.t('mainMenu.general'),
              click: () => {
                this.goTo('/settings/general');
              },
            },
            {
              label: i18n.t('mainMenu.routing'),
              click: () => {
                this.goTo('/settings/routing');
              },
            },
            {
              label: i18n.t('mainMenu.debugger'),
              click: () => {
                this.goTo('/settings/debugger');
              },
            },
            {
              label: i18n.t('mainMenu.server'),
              click: () => {
                this.goTo('/settings/server');
              },
            },
          ],
        },
        { type: 'separator' },
        { label: i18n.t('mainMenu.services'), submenu: [] },
        { type: 'separator' },
        {
          label: i18n.t('mainMenu.hideMidiJar'),
          accelerator: 'Command+H',
          selector: 'hide:',
        },
        {
          label: i18n.t('mainMenu.hideOthers'),
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:',
        },
        { label: i18n.t('mainMenu.showAll'), selector: 'unhideAllApplications:' },
        { type: 'separator' },
        {
          label: i18n.t('mainMenu.close'),
          accelerator: 'Command+W',
          click: () => {
            this.mainWindow.close();
          },
        },
        {
          label: i18n.t('mainMenu.quit'),
          accelerator: 'Command+Q',
          click: () => {
            app.quit();
          },
        },
      ],
    };
    const subMenuWindow: DarwinMenuItemConstructorOptions = {
      label: i18n.t('mainMenu.window'),
      submenu: [
        {
          label: i18n.t('mainMenu.minimize'),
          accelerator: 'Command+M',
          selector: 'performMiniaturize:',
        },
        { label: i18n.t('mainMenu.close'), accelerator: 'Command+W', selector: 'performClose:' },
        { type: 'separator' },
        {
          label: i18n.t('mainMenu.toggleFullScreen'),
          accelerator: 'Ctrl+Command+F',
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          },
        },
        {
          label: i18n.t('mainMenu.toggleAlwaysOnTop'),
          accelerator: 'Ctrl+Command+P',
          click: () => {
            const isAlwaysOnTop = this.mainWindow.isAlwaysOnTop();

            this.mainWindow.setAlwaysOnTop(!isAlwaysOnTop, 'floating');
          },
        },
        { label: i18n.t('mainMenu.bringAllToFront'), selector: 'arrangeInFront:' },
      ],
    };
    const subMenuHelp: MenuItemConstructorOptions = {
      label: i18n.t('mainMenu.help'),
      submenu: [
        {
          label: i18n.t('mainMenu.credits'),
          click: () => {
            this.goTo('/settings/credits');
          },
        },
        {
          label: i18n.t('mainMenu.licenses'),
          click: () => {
            this.goTo('/settings/licenses');
          },
        },
        {
          label: i18n.t('mainMenu.reportBug'),
          click() {
            shell.openExternal('https://github.com/la-jarre-a-son/midi-jar/issues');
          },
        },
      ],
    };

    return [subMenuAbout, subMenuWindow, subMenuHelp];
  }
}
