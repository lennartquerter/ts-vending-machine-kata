import * as readline from 'readline'

export class Application {
    public run() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        rl.question('What would you like to do?\n', (answer) => {
            console.log(answer)

            process.exit(0)
        })
    }
}


