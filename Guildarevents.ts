import { Client, Invite, Member } from "eris";
import { stdout } from "node:process";

const LOGGING_CHANNEL_ID = "924226267342069770";

const client = new Client("tok", {
    intents: ["guilds", "guildInvites", "guildMembers"],
}) as Client;

client.once("ready", () => {
    stdout.write(`${client.user.username} is ready.`);
});

client.on("guildMemberAdd", async (guild, member) => {
        const invites = await guild.getInvites();
        invites?.forEach((e: Invite) => {
        client.createMessage(LOGGING_CHANNEL_ID!, {
            content: `**${member.username}#${member.discriminator}** was been invited by **${e?.inviter?.username}#${e?.inviter?.discriminator}**, used code: ${e.code === guild.vanityURL ? "*vanity code*" : `https://discord.gg/${e.code}`}, now it was been used for **${e.uses}** time${e.uses > 1 ? "s" : ""}.`,
        });
    });
});

client.on("guildMemberRemove", async (guild, member) => {
    if (member instanceof Member) {
        const invites = await guild.getInvites();
        invites?.forEach((e: Invite) => client.createMessage(LOGGING_CHANNEL_ID!, { content: `**${member.username}#${member.discriminator}** was left, they were invited by **${e?.inviter?.username}#${e?.inviter?.discriminator}**, used code: ${e.code === guild.vanityURL ? "*vanity code*" : `https://discord.gg/${e.code}`}, now it was been used for **${e.uses}** time${e.uses > 1 ? "s" : ""}.` }));
    }
});

client.connect();
