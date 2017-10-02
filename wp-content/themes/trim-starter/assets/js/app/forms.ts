import * as  jQuery from "jquery";

export class FormHandler {
    inputs: string[]
    form: string;
    payload = {};

    constructor( public inputNames: string[], 
                 public formName: string,
                 public actionName: string
               ) {
        this.inputs = inputNames;
        this.form = formName;
        this.payload = { action: actionName }; 
    }

   
    private valueCheck(item: string): boolean {
       return jQuery(`#${item}`).val() !== '';
    }

    private formValid(): boolean {
       return this.inputNames.every(this.valueCheck);
     }

    private showErrorMessage(): void {
        jQuery.each(this.inputNames, (index, value) => {
          if ( jQuery(`#${value}`).val() === '' ) {
            jQuery(`#${value}-error`).removeClass('hidden');
            jQuery(`#${value}`).addClass('error-message');
          } else {
            jQuery(`#${value}-error`).addClass('hidden');
            jQuery(`#${value}`).removeClass('error-message');
          }
        });
    }

    private showSucessAndReset(): void {
        this.showErrorMessage(); 
        jQuery(`#${this.form}-success`).removeClass('hidden');
        let form = <HTMLFormElement>jQuery(`#${this.form}`)[0]
        form.reset();
        jQuery('#spinner').addClass('hidden');
    }

    // create data object to be passed to server
    private makePayload(): void {
        this.inputNames.forEach( value => {
            this.payload[value] = jQuery(`#${value}`).val(); 
        })
    }

    submitForm(): void {
      this.makePayload();

      if ( this.formValid() ) {
        let data = this.payload;
        jQuery('#spinner').removeClass('hidden');

        jQuery.post('/wp-admin/admin-ajax.php', data, (response) => {
          if(response.message) {
            this.showSucessAndReset();
          } else if(response.success === false) {
            jQuery(`${this.formName}-error`)
              .text(response.data.error)
              .removeClass('hidden');
          }

        });

      } else {
        this.showErrorMessage();
      }
                
    }
}
