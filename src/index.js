
import {promises as fs} from "fs"
 import moment from "moment"


( async () => {
    const [template] = await Promise.all([ fs.readFile("./src/README.md.tpl",{encoding:"utf-8"})]);
    const fechaNacimiento = "1996-12-30";
    const edad = moment().diff(fechaNacimiento, 'years');
    
    const nuevoReadme = template.replace('%{{edad}}%', edad);
    await fs.writeFile("./README.md", nuevoReadme);
})();


