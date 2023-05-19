import TextboxPage from "../pageObjects/Textbox.page";
import CheckboxPage from "../pageObjects/Checkbox.page";
import RadioButtonPage from "../pageObjects/RadioButton.page";
import ButtonsPage from "../pageObjects/Buttons.page";

describe("DemoQA spec", () => {
  context("Textbox scenarios", () => {
    beforeEach(() => {
      TextboxPage.visit();
    });

    it("Textbox - positive case", () => {
      //  Set Full Name
      TextboxPage.usernameField.type("Barack Obama");
      // Set email
      TextboxPage.emailField.type("Barack.Obama@usa.com");
      //set Current Address
      TextboxPage.currentAddressField.type("Tirgus");
      //set permanent address
      TextboxPage.permanentAddressField.type("Valleta");
      //click submit
      TextboxPage.submitButton.click();
      //validate that the values are corerect
      TextboxPage.nameInfo.should("have.text","Name:Barack Obama");
      TextboxPage.emailInfo.should("have.text","Email:Barack.Obama@usa.com");
      TextboxPage.currentAddressInfo.should("contain.text","Current Address :Tirgus");
      TextboxPage.permanentAddressInfo.should("contain.text","Permananet Address :Valleta");
    });

    it("Textbox - negative case", ()=>{
      // Set incorrect
      TextboxPage.emailField.type("Barack.Obama@");
      //click submit
      TextboxPage.submitButton.click();
      //validate it is read and wrong
      TextboxPage.fieldError.should("be.visible");
      TextboxPage.emailField.should("have.class","field-error");
    });
  });
  context("Checkbox scenarios", () => {
    beforeEach(() => {
      CheckboxPage.visit();
    });

    it("Check values notes,angular, private, excel file.doc",() =>{
      // Click expand
      CheckboxPage.expandAll.click();
      // Select values - notes,angular, private, excel file.doc
      CheckboxPage.allCheckboxes.contains("Notes").click();
      CheckboxPage.allCheckboxes.contains("Angular").click();
      CheckboxPage.allCheckboxes.contains("Private").click();
      CheckboxPage.allCheckboxes.contains("Excel File.doc").click();
      // Validate that information line contains the checked values
      CheckboxPage.textSuccess.should("contain.text","notes")
      .and("contain.text", "angular")
      .and("contain.text", "private")
      .and("contain.text", "excelFile");
    });
    it("Check value office",() =>{
      //click expand
      CheckboxPage.expandAll.click();
      //select vlaue - office
      CheckboxPage.allCheckboxes.contains("Office").click();
      // Validate - office public private classified general
      CheckboxPage.textSuccess.should("contain.text","office")
      .and("contain.text", "public")
      .and("contain.text", "private")
      .and("contain.text", "classified")
      .and("contain.text", "general");
    });
  });
  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });
    it("Click radio buttons", () => {
      // Click Yes button
      RadioButtonPage.radioYesButton.click({force: true});
      // Validate - that Yes button is clicked
      RadioButtonPage.textSuccess.should("contain.text","Yes");
      // Click Impressive button
      RadioButtonPage.radioImpressiveButton.click({force: true});
      // Validate that impressive button is clicked
      RadioButtonPage.textSuccess.should("contain.text","Impressive");
      // Validate that No button is unclickable/disabled
      RadioButtonPage.radioNoButton.should("be.disabled");
    });
  });
  context("Buttons", () => {
    beforeEach(() =>{
     ButtonsPage.visit();
    });
    it("Button clicking", () =>{
      // Click Double click me button
      ButtonsPage.doubleClickButton.dblclick();
      // Validate the double click message
      ButtonsPage.doubleClickMessage.should("have.text","You have done a double click");
      // Click Right click me
      ButtonsPage.rightClickButton.rightclick();
      // Validate the right click message
      ButtonsPage.rightClickMessage.should("have.text","You have done a right click");
      // Click Dynamic button
      ButtonsPage.dynamicClickButton.eq(2).click();
      // Validate the Dynamic button click
      ButtonsPage.dynamicClickMessage.should("have.text","You have done a dynamic click");
    });
  });
});