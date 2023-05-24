// questions
const questions = [
    {
        type: 'maxlength-input',
        message: 'Pick up to three characters',
        name: 'text',
        maxLength: '3',
    },
    {
        type: 'input',
        message: 'What color do you want the text?',
        name: 'color',
    },
    {
        type: 'list',
        message: 'Please choose a shape for your logo',
        name: 'shape',
        choices: [
            {
                name: 'Circle',
                value: 'circle',
            },
            {
                name: 'Square',
                value: 'square',
            },
            {
                name: 'Triangle',
                value: 'triangle',
            }
        ]
    },
    {
        type: 'input',
        message: 'What color do you want your shape to be?',
        name: 'backgroundcolor',
    },
]