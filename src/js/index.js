const app = document.getElementById('typewriter');

        const typewriter = new Typewriter(app, {
            loop: true,
            delay: 40,
            cursor: '▊' // 经典的终端光标
        });

        typewriter
            .typeString('Building thoughtful systems...')
            .pauseFor(2000)
            .deleteAll(20)
            .typeString('Human-centered AI architecture.')
            .pauseFor(2000)
            .deleteAll(20)
            .typeString('At the intersection of design & code.')
            .pauseFor(2000)
            .start();
