import * as  jQuery from "jquery";

class FormHandler {
    inputs: string[]
    form: string;
    ajaxActionName: string;
    payload: Object;

    constructor( public inputNames: string[], 
                 public formName: string,
                 public actionName: string
               ) {
        this.inputs = inputNames;
        this.form = formName;
        this.ajaxActionName = actionName;
    }

   
    valueCheck(item){
       return jQuery(item).val() !== '';
    }

    formValid() {
       return this.inputNames.every(this.valueCheck);
     }

    showErrorMessage() {
        jQuery.each(this.inputNames, function(index, value) {
          if ( jQuery(`${this.formName}-${value}`).val() === '' ) {
            jQuery(`${this.formName}-${value}` + '-error').removeClass('hidden');
            jQuery(`${this.formName}-${value}`).addClass('input-error');
          } else {
            jQuery(`${this.formName}-${value}` + '-error').addClass('hidden');
            jQuery(`${this.formName}-${value}`).removeClass('input-error');
          }
        });
    }

    showSucessAndReset() {
        jQuery('.error-message').addClass('hidden');
        jQuery(`${this.formName}-success`).removeClass('hidden');
        jQuery(`${this.formName}`)[0].reset();
    }

    // create data object to be passed to server
    makePayload() {
        this.inputNames.forEach( value => {
            Object.defineProperty(this.payload, value, { value: jQuery(value).val() });
        })
    }

    submitForm() {
        // ajax action wordpress is looking for to complete request
        let action = { action: this.ajaxActionName }; 
        // typescript object spread operator works like Object.assign
        let data = { ...this.payload, ...action };

        jQuery.post('/wp-admin/admin-ajax.php', data, function(response){
          jQuery('#spinner').addClass('hidden');
          if(response.message) {
            this.showSucessAndReset();
          } else if(response.success === false) {
            jQuery(`${this.formName}-form-error`)
              .text(response.data.error)
              .removeClass('hidden');
          }
        });
                
    }
}