import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";

  import { AutomatedElement } from "./index"
  import { Button } from "./index"

  export class AgendaButton extends Button {
      locator: By = By.css('#tkf-body > div > div > div.viewerArea__nav.ng-scope > div > div > div.navbar-collapse.collapse > div > ul > li.viewer__navbar__fullSwitcher > div > a.btn.btn-default.navbar-btn.viewer__navbar__button.ng-scope.active');

      constructor() {
          super();
      }
  }