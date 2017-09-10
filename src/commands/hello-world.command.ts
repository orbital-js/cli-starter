import { Command } from '@orbital/core/cli';

@Command({
    command: 'hello',
    options: [{
        long: 'orbital',
        short: 'o',
    }],
    arguments: [{
        name: 'language'
    }]
})
export class HelloWorld {
    action(args, opts) {

    }
}
