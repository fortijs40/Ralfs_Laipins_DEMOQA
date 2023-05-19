import BasePage from "./Base.page";

class ButtonsPage extends BasePage{
    static get url(){
        return "/buttons";
    }
    static get doubleClickButton(){
        return cy.get("#doubleClickBtn");
    }
    static get doubleClickMessage(){
        return cy.get("#doubleClickMessage");
    }
    static get rightClickButton(){
        return cy.get("#rightClickBtn");
    }
    static get rightClickMessage(){
        return cy.get("#rightClickMessage");
    }
    static get dynamicClickButton(){
        return cy.get(".btn-primary");
    }
    static get dynamicClickMessage(){
        return cy.get("#dynamicClickMessage");
    }

}
export default ButtonsPage;