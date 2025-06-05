sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

], (Controller, MessageToast) => {
    "use strict";


    return Controller.extend("com.acn.training.activity4.controller.MainView", {
        onInit() {
        },

        onAddItem: function (){
            this.fnDisplayMsg("Add button pressed");
        },

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
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptFName").getValue();            

            // Check if first name is blank
            if ((oInputFNameValue === "") && (oInputLNameValue === "")){
                sap.m.MessageToast.show("Required Field is blank"); 
            }

        },

        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },


    



    });
});