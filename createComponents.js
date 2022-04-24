const fs = require('fs')
const componentName = process.argv[2]

const componentTemplate = `import s from './${componentName}.module.css'

const ${componentName} = () => {
  return (
    <div className={s.root}>${componentName}</div>
  )
}

export default ${componentName}`;

const indexTemplate = `import ${componentName} from './${componentName}';

export default ${componentName};`

const createComponents = new Promise((resolve, reject) => {
    const path = `./src/components/${componentName}`

    if (fs.existsSync(path)) {
        reject('Component already exists')
    }

    fs.mkdir(path, { recursive: true }, (err) => {
        if (err !== null) {
            reject(err);
        } else {
            resolve(path);
        }
    });
});

console.log(`Start creating ${componentName} component`)

createComponents.then((dirPath) => {
    fs.writeFile(`${dirPath}/${componentName}.js`, componentTemplate, (err) => {
        if (err !== null) {
            Promise.reject(err)
        }
    });
    return dirPath
}).then(async (dirPath) => {
    fs.writeFile(`${dirPath}/${componentName}.module.css`, ".root {\n\n}", (err) => {
        if (err !== null) {
            Promise.reject(err)
        }
    })
    return dirPath
}).then(async (dirPath) => {
    fs.writeFile(`${dirPath}/index.js`, indexTemplate, (err) => {
        if (err !== null) {
            Promise.reject(err)
        }

    })
}).catch((e) => { console.log('We got a problem : ', e) })

console.log('Creation copleted')



