import * as lang from '../Module/Language.js'

if (lang.isKorea() == false)
{
    window.location.replace("./Html/kr_index.html");
}
else
{
    window.location.replace("./Html/en_index.html");
}
