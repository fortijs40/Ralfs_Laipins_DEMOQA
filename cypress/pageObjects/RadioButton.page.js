import BasePage from "./Base.page";

class RadioButtonPage extends BasePage{
    static get url(){
        return "/radio-button";
    }
    static get radioYesButton(){
        return cy.get("#yesRadio");
    }
    static get radioImpressiveButton(){
        return cy.get("#impressiveRadio");
    }
    static get textSuccess(){
        return cy.get(".text-success");
    }
    static get radioNoButton(){
        return cy.get("#noRadio");
    }

}
export default RadioButtonPage;