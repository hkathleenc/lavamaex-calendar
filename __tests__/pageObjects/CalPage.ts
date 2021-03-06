/**
 * Author: Helen Cunningham
 * 01/18/21
 */

 import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";

 import { 
    AutomatedElement,
    AgendaButton,
    PinboardButton,
    MonthlyButton  
  } from "./index"


  export class CalPage extends AutomatedElement {
    url: string = "https://lavamaex.org/ourcalendar";
    logo: By = By.css('img.Mobile-bar-branding-logo');
    eventsHeader: By = By.xpath('//*[@id="tkf-body"]/div/div/div[3]/ui-view/div/div[1]/div[2]/span/span[1]');
    // Page buttons
    ag_button: AgendaButton;
    pin_button: PinboardButton;
    month_button: MonthlyButton;
    
     
    constructor() {
        super();
    }

    /**
    * Navigates to LavaMaex's calendar web page. 
    * Then waits for the organization's logo to load.
    */
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(
          until.elementIsVisible(await this.getElement(this.logo))
        );
      }
      /**
       * Maximizes the web page.
       * NOTE: This uses code from the web site:
       * http://www.software-testing-tutorials-automation.com/2020/05/maximize-and-full-screen-window-using.html
       */
      async maxWindow() {
        await this.driver.manage().window().maximize();
      }
      /**
       * Pauses the driver for an amount of time determined by the user
       * Credit: Steven Cooper (project: g1p1-1)
       */
      async sleep(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms));
      }
      
    /**
    * Instructs the browser to wait for an element to load.
    */
    async waitToLoad(elementBy: By) {
        await this.driver.wait(
        until.elementIsEnabled(await this.getElement(elementBy))
        );
    }
  }

  