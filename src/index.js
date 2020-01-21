const fs = require('fs');

function createFile(title) {
    fs.writeFile(`${__dirname}/arquivos/${title}.txt`, title, (err) => {
        if (err != null) {
            console.log('Erro ao criar arquivo.');
            console.log(err)
        } else {
            console.log(`${title} criado com sucesso`);
        }
    });
}

function writeLine(path, data){
    const fs = require('fs');
    try {
        fs.appendFileSync(`${__dirname}/arquivos/${path}.txt`, `${data}\r\n`, { mode: 0o755 });
    } catch(err) {
        console.log(`Erro ao escrever linha no arquivo ${path}`);
        console.error(err);
    }
}

function start() {
    console.log('Iniciando execução...');
    let aux = 1;
    let title = '';

    const lineReader = require('line-reader');

    lineReader.eachLine(`${__dirname}/SE1.txt`, function(line) {
        if (line.includes('cds.comp')) {
            aux++;
            if ((aux % 2 === 0)) {
                title = line;
                createFile(title);
            }
        }
        writeLine(title, line);
    });
}

start();