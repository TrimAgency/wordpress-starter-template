
interface config {
  inputType: string
  inputId: string
  required: boolean
}

export class FormHandler {
    inputs: config[]
    form: string;
    payload = {};

    constructor( public inputNames: config[], 
                 public formName: string,
                 public actionName: string
               ) {
        this.inputs = inputNames;
        this.form = formName;
        this.payload = { action: actionName }; 
    }

    private emailCheck(email): boolean {
      const regEx: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      return regEx.test(email); 
    }

    private valueCheck(inputValue): boolean {
       return inputValue !== '';
    }
    private validator(item: config) {
      let inputValue = jQuery(`#${item.inputId}`).val()
      if (item.inputType === 'email') {
        return this.emailCheck(inputValue)
      } else if( item.required ) {
        return this.valueCheck(inputValue)
      }
    }

    private formValid(): boolean {
       return this.inputNames.every(this.validator);
     }

    private showErrorMessage(): void {
        jQuery.each(this.inputNames, (index, item) => {
          if ( jQuery(`#${item.inputId}`).val() === '' ) {
            jQuery(`#${item.inputId}-error`).removeClass('hidden');
            jQuery(`#${item.inputId}`).addClass('error-message');
          } else {
            jQuery(`#${item.inputId}-error`).addClass('hidden');
            jQuery(`#${item.inputId}`).removeClass('error-message');
          }
        });
    }

    private showSucessAndReset(): void {
        // clear error messages
        this.showErrorMessage();
        // show success message 
        jQuery(`#${this.form}-success`).removeClass('hidden');
        // reset form
        let form = <HTMLFormElement>jQuery(`#${this.form}`)[0]
        form.reset();
        // hide spinner
        jQuery('body').addClass('loaded');
    }

    // create data object to be passed to server
    private makePayload(): void {
        this.inputNames.forEach( item => {
            this.payload[item.inputId] = jQuery(`#${item.inputId}`).val(); 
        })
    }

    submitForm(): void {
      this.makePayload();

      if ( this.formValid() ) {
        let data = this.payload;
        // show spinner
        jQuery('body').removeClass('loaded');

        jQuery.post('/wp-admin/admin-ajax.php', data, (response) => {
          if(response.message) {
            this.showSucessAndReset();
          } else if(response.success === false) {
            jQuery(`${this.form}-error`)
              .text(response.data.error)
              .removeClass('hidden');
          }

        });

      } else {
        this.showErrorMessage();
      }
                
    }
}
