import { FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "src/app/shared/base.component";
import * as _ from "lodash";
import { isNullOrUndefined } from 'is-what';
import { APP_SETTINGS } from "src/app/shared/app.settings";

export abstract class AbstractFormComponent 
    extends BaseComponent {

    errorKeys: string[];
    errors: any;
    actionStarted: string;

    entityForm: FormGroup;
    entityFormFields: any;

    constructor() {
        super();
    }

    public setFormValidation() {

        Object.keys( this.entityFormFields )
            .forEach((key: any) => {

                const field = this.entityFormFields[ key ];
                const validators = _.get( field, "validators", []);

                if( field.disabled ) {
                    this.entityForm.controls[ key ].disable();
                } else {
                    this.entityForm.controls[ key ].enable();

                    if( field.mandatory ) {

                        this.entityForm.controls[ key ]
                            .setValidators([
                                ... validators,
                                Validators.required
                            ]);
                    } else
                        this.entityForm.controls[ key ].setValidators( validators );
                }
            });
    }

    public validateForm( ignoreFields: any ): boolean {

        if( isNullOrUndefined( ignoreFields ))
            ignoreFields = [];

        this.errors = {};
        this.errorKeys = [];
        this.entityForm.updateValueAndValidity({
            onlySelf: false,
            emitEvent: true
        });

        let result = true;
        if( !this.entityForm.valid ) {

            Object.keys( this.entityFormFields )
                .forEach(( controlKey: any ) => {

                    const field = this.entityFormFields[ controlKey ];
                    const errorObj = this.entityForm.controls[ controlKey ].errors;

                    if( 
                        !field.disabled &&
                        field.mandatory && 
                        field.control !== '' &&
                        ignoreFields.indexOf( controlKey ) === -1 && 
                        errorObj
                    ) {
                        this.errors[ controlKey ] = this.getErrorMessage( errorObj );
                        result = false;
                    }
                });

            this.errorKeys = Object.keys(  this.errors );
            if( !result )
                return result;
            else
                return result;
        } else
            return result;
    }

    public getErrorMessage( error: any ): string {

        if( !error || isNullOrUndefined( error ))
            return APP_SETTINGS.ERROR_MESSAGES.EMPTY;

        if( error.required ) {
            return APP_SETTINGS.ERROR_MESSAGES.REQUIRED
        } else if( error.maxlength ) {
            return APP_SETTINGS.ERROR_MESSAGES[
                "MAX_LENGTH_".concat( error.maxlength.requiredLength )
            ];
        } else if( 
            error.pattern &&
            error.pattern.requiredPattern === APP_SETTINGS.VALIDATORS.NUMERIC_PATTERN
        ) {
            return APP_SETTINGS.ERROR_MESSAGES.NUMERIC;
        } else
            return APP_SETTINGS.ERROR_MESSAGES.EMPTY;
    }

    public handleInputFocus(): void {
        this.errors = {};
        this.errorKeys = [];
    }
}