"use strict";
(() => {
    let NivelAudio;
    (function (NivelAudio) {
        NivelAudio[NivelAudio["minimo"] = 0] = "minimo";
        NivelAudio[NivelAudio["medio"] = 1] = "medio";
        NivelAudio[NivelAudio["maximo"] = 5] = "maximo";
        NivelAudio[NivelAudio["potente"] = 6] = "potente";
    })(NivelAudio || (NivelAudio = {}));
    const audioActual = NivelAudio.potente;
    console.log(audioActual);
})();
