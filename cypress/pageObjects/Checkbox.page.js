import BasePage from "./Base.page";

class CheckboxPage extends BasePage{
    static get url(){
        return "/checkbox";
    }
    static get expandAll(){
        return cy.get(".rct-option-expand-all");
    }
    static get allCheckboxes(){
        return cy.get(".rct-title");
    }
    static get textSuccess(){
        return cy.get(".text-success");
    }
}
export default CheckboxPage;