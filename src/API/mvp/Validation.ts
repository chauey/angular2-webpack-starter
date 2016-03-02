/// <reference path="api.d.ts" />

'use strict';

export interface Validation {
  id: number;

  required: string;
  integer?: number;
  string?: string;
  date?: Date;
  beforeDate?: Date;
  afterDate?: Date;
  age?: number;
  creditCard?: string;
  email?: string;
  phone?: string;
  url?: string;
  zip?: string;
  startsWithAA?: string;
  containsAA?: string;
  parentValidationId?: number;
}
