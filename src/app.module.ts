import { CliModule } from '@orbital/core/cli';
import { DefaultCommand } from './commands/default.command';
import { HelloWorld } from './commands/hello-world.command';

@CliModule({
    commands: [
        HelloWorld,
        DefaultCommand
    ]
})
export class AppModule { }
