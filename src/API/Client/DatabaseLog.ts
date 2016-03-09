// <reference path="api.d.ts" />

//namespace API.Client {
    'use strict';




    export interface DatabaseLog {



        /**
         * DatabaseLogId
         */

        databaseLogId?: number;



        /**
         * PostTime
         */

        postTime?: Date;



        /**
         * DatabaseUser
         */

        databaseUser?: string;



        /**
         * Event
         */

        event?: string;



        /**
         * Schema
         */

        schema?: string;



        /**
         * Object
         */

        object?: string;



        /**
         * Tsql
         */

        tsql?: string;



        /**
         * XmlEvent
         */

        xmlEvent?: string;

    }




//}
