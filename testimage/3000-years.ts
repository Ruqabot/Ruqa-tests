import type { Client, Message } from "eris";
import { resolve } from "node:path";
import ImageCore from "../../libs/ImagesCore";
import Command from "../../structures/Command";
import { sanitizeMention } from "../../utils/Util";

export default new Command({
    name: "3000-years",
    description: "Creates a 3000-years of memorial image",
    aliases: ["3000-y"],
    category: "Images",
    isDisabled: false,

    run: async ({ client, message, args }: {
        client: Client,
        message: Message,
        args: string[],
    }) => {
        const memberID = sanitizeMention(args[0]) ?? message.author.id;
        const restMember = await client.getRESTGuildMember(message.guildID!, memberID);
        const image = new ImageCore(message.channel.id);
        await image.overlapImageOnImage(resolve(".", "src", "assets", "3000-years.png"), restMember.avatarURL, 505, 15);
    },
});
