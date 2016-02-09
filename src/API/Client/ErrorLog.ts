/// <reference path="api.d.ts" />

//namespace API.Client {
    'use strict';




    export interface ErrorLog {



        /**
         * ErrorLogId
         */

        errorLogId?: number;



        /**
         * ErrorTime
         */

        errorTime?: Date;



        /**
         * UserName
         */

        userName?: string;



        /**
         * ErrorNumber
         */

        errorNumber?: number;



        /**
         * ErrorSeverity
         */

        errorSeverity?: number;



        /**
         * ErrorState
         */

        errorState?: number;



        /**
         * ErrorProcedure
         */

        errorProcedure?: string;



        /**
         * ErrorLine
         */

        errorLine?: number;



        /**
         * ErrorMessage
         */

        errorMessage?: string;

    }




//}
