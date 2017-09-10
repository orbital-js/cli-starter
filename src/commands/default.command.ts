import { Action, Command } from '@orbital/core/cli';

@Command({
    options: [{
        short: 'o',
        long: 'option'
    }],
    arguments: [{
        name: 'cake',
        required: true
    }, {
        name: 'taste',
        required: false,
        variadic: true
    }, {
        name: 'flavor',
        required: false,
    }]
})
export class DefaultCommand implements Action {
    action(args, opts) {
        console.log(args);
        console.log(opts);

        console.log('Default command!');
    }
}
