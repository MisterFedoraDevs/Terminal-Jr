new Typed('#typedOut', options = {
    strings: [
            "Terminal Jr v1.0.0 <br>" +
            "Created (C) By Darron Johnson Jr. <strong>Enjoy the game!</strong><br><br>" +
            "Welcome to Terminal Jr <br>" +
            "Type '-help' to get help. <br>" +
            "Type '-hint' to get hint. <br><br>"
            ],
    typeSpeed: 1,
    backSpeed: 0,
    loop: false,
    showCursor: false,
});

const terminal = document.querySelector(".terminal");
createCommandLine();

function createCommandLine() {
    const userText = document.createElement("span");
    userText.textContent = "Player1 > ";
    terminal.appendChild(userText);

    const input = document.createElement("input");
    terminal.appendChild(input);
    input.focus();

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const command = input.value.trim().toLowerCase();

            input.disabled = true;

            runCommand(command);

            createCommandLine();
        }
    })
};

function runCommand(command) {
        if (commands[command]) {
        commands[command].found = true;
    }

    const output = document.createElement("div");
    terminal.appendChild(output);

    if (command === "-help") {
        new Typed(output, {
            strings: [
                "Terminal Jr is a game where you need to find all the commands that are listed in the Terminal. <br>" +
                "Use -hint to get a hint.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-hint") {
        new Typed(output, {
            strings: [
                "Almost all the commands relate to computer science. Think hard about it.<br>" +
                "What makes a webpage? What do you type? Where do you code at? What are some types of webpages?<br>" +
                "Some of them are meant to be funny and hard. You'll never find those even with a hint or 2." +
                commandsFound() +
                "<br><br>" +
                "By the way, these are the only hints you get. Enjoy! :P"
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }
    
    else if (command === "-hackclub") {
        new Typed(output, {
            strings: [
                "I am the President of Ridge View Hack Club. A Hack Club located in Columbia, SC.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-html") {
        new Typed(output, {
            strings: [
                "HTML is a coding language used to create a website's structure. It's one of three coding languages most websites use.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-css") {
        new Typed(output, {
            strings: [
                "CSS is a coding language used to create a website's style. That's the way the website looks, like the colors it uses. This website does not have CSS. That's why it looks <em>Flavorless<em>.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-js") {
        new Typed(output, {
            strings: [
                "JavaScript (JS) is a coding language used to make a website interactive. This website uses JavaScript to see what you typed, to check it against a dataset, and tell you how many commands you have left.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-laptop") {
        new Typed(output, {
            strings: [
                "I use my laptop to code. It's a Dell Inspiron 16'' from like... 2020? Yeah, it's old for a laptop, but it still works!<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-laptop") {
        new Typed(output, {
            strings: [
                "I use my laptop to code. It's a Dell Inspiron 16'' from like... 2020? Yeah, it's old for a laptop, but it still works!<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-setup") {
        new Typed(output, {
            strings: [
                "So, I use my <strong>laptop</strong> to code. I connect it to a TV that's like... 32''? Then, I show the output on the TV and the code on my laptop. The bad thing is, I sit on the ground.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-404") {
        new Typed(output, {
            strings: [
                "Command not found, wait this is an output to a command that isn't found. That means this command was found.<br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-topsecret") {
        new Typed(output, {
            strings: [
                "Accessing Darron's Top Secret database. Please wait...<br> ^4000" +
                "Cancelled. You do not have access. Please try again later." +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else if (command === "-reset") {
        new Typed(output, {
            strings: [
                "Why would you want to do that!? Keep going. You didn't find them all yet.." +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        });
    }

    else {
        new Typed(output, {
            strings: [
                "Command not fond. Please try again. <br>" +
                commandsFound()
                ],
            typeSpeed: 1,
            backSpeed: 0,
            loop: false,
            showCursor: false,
        })
    }

    terminal.appendChild(output);
};

const commands = {
    "-help": {
        found: false
    },
    "-hint": {
        found: false
    },
    "-hackclub": {
        found: false
    },
    "-css": {
        found: false
    },
    "-js": {
        found: false
    },
    "-laptop": {
        found: false
    },
    "-setup": {
        found: false
    },
    "-404": {
        found: false
    },
    "-topsecret": {
        found: false
    },
    "-reset": {
        found: false
    },
    "-html": {
        found: false
    }
};

function commandsLeft() {
    return Object.values(commands)
        .filter(command => !command.found)
        .length
}

function commandsFound() {
    const total = Object.keys(commands).length;
    const found = Object.values(commands)
        .filter(command => command.found)
        .length
    
    return `${found} / ${total} commands found.`;
}