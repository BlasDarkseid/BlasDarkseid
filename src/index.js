 import {promises as fs} from "fs"


( async () => {
    const [template] = await Promise.all([ fs.readFile("./src/README.md.tpl",{encoding:"utf-8"})])
    console.log(template);
})()

