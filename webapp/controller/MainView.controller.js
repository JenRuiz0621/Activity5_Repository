sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

], (Controller, MessageToast) => {
    "use strict";


    return Controller.extend("com.acn.training.activity4.controller.MainView", {
        onInit() {
        },

 /*
        onAddItem: function (){
            this.fnDisplayMsg("Add button pressed");
        },
        */

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCardLabel = this.getView().byId("idLblCard");
            var oCardInput = this.getView().byId("idInputCard");

            if (sSelectedKey === "GCASH"){
                // show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                this.fnDisplayMsg("You selected GCASH as your mode of payment! Please Input your Mobile Number.");
            } else {
                // show the card field
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            }
            
            if (sSelectedKey === "CC"){           
                oCardLabel.setVisible(true);
                oCardInput.setVisible(true);
                this.fnDisplayMsg("You selected Credit Card as your mode of payment! Please input your Credit Card number.");
            } else {
            // show the card field
                oCardLabel.setVisible(false);
                oCardInput.setVisible(false);
            }                
        },

        onPressCheckout: function (){
            var oInputFName = this.getView().byId("idInptFName");
            var oInputLName = this.getView().byId("idInptLName");
            var oInputFNameValue = oInputFName.getValue();
            var oInputLNameValue = oInputLName.getValue();
            var oRouter = this.getOwnerComponent().getRouter();

            // Check if first name and last name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
               
// set value state to Error
                oInputFName.setValueState("Error");
                oInputLName.setValueState("Error");
            } else {
                oInputFName.setValueState("None");
                oInputLName.setValueState("None");

                //Navigate to review page passing first
                oRouter.navTo("RouteReviewPage", {
                    firstName: oInputFNameValue
                });

            }
        },



        onAddItem: function (){
            // Comment this code for now
            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            // var sMsg = oTextBundle.getText("addButtonMsg");
            // this.fnDisplayMsg(sMsg);

            // Instantiate the fragment

            // create dialog lazily
            if (!this.oDialog) {
                // By using loadFragment, we are adding the fragment as a dependent to the View
                // By doing so, we can use the functions inside the view's controller
                this.oDialog = this.loadFragment({
                    name: "com.acn.training.activity5.fragment.ProductDialog"
                });
            } 
            this.oDialog.then(function(oDialog) {
                oDialog.open();
            });
        },

        
        onCloseDialog: function (){
            this.getView().byId("idProductDialog").close();
        },


    



    });
});