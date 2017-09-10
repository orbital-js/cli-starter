#!/usr/bin/env node --harmony

import { AppModule } from './app.module';
import { platformCli } from '@orbital/core/cli';

platformCli().bootstrap(AppModule);
