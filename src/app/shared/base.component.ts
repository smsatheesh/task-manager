import { OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { APP_SETTINGS } from "./app.settings";
import { Component } from '@angular/core';

@Component({
    template: ''
})

export abstract class BaseComponent implements OnInit, OnDestroy {

    public loading: Boolean = false;
    public error: string = '';
    public infoText =  "";

    protected subscriptions: Subscription[] = [];

    protected constructor() {}

    ngOnInit(): void {
        this.initComponent();
    }

    abstract initComponent(): any;

    ngOnDestroy(): void {
        
        this.subscriptions.forEach(( subscription: any ) => {
            if( subscription && !subscription["closed"] )
                subscription.unsubscribe();
        });
    }

    public get appSettings() {
        return APP_SETTINGS;
    }

    protected addSubscrition( subscription: Subscription ) {
        if( this.subscriptions )
            this.subscriptions.push( subscription );
    }

    protected resetLoading(): void {
        this.loading = false;
    }

    protected startLoading(): void {
        this.loading  = true;
    }
}