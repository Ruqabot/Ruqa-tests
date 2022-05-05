import { read, MIME_JPEG } from "jimp";
import prettyMs from "pretty-ms";
import ruqa from "..";

export default class ImageCore {
    #channelID: string;

    public constructor(channelID: string) {
        this.#channelID = channelID;
    }

    public async overlapImageOnImage(
        baseSrc: string,
        appendSrc: string,
        x: number,
        y: number,
        mimeType?: string,
    ) {
        const prev = Date.now();
        const base = await read(baseSrc);
        const append = (await read(appendSrc)).resize(300, 300).blur(2);
        const data = base.composite(append, x, y);
        const buff = await data.getBufferAsync(mimeType ?? MIME_JPEG);
        const now = Date.now();
        const diff = now - prev;
        ruqa.createMessage(this.#channelID, { content: `Time took: *${prettyMs(diff, { formatSubMilliseconds: true })}*` }, [{ file: buff, name: "image.png" }]);
    }
}
